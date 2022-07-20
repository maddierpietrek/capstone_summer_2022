import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import OpportunitiesDataService from "../services/opportunities.service";
import _ from "lodash";

export const retrieveOpportunities = createAsyncThunk(
  "opportunities/retreive",
  async () => {
    const res = await OpportunitiesDataService.getAll();
    // console.log(res);
    return res.data ?? [];
  }
);

export const retrieveOpportunitiesRevenue = createAsyncThunk(
  "opportunitiesRevenue/retreive",
  async () => {
    const res = await OpportunitiesDataService.getRevenue();
    console.log(res);
    return res.data ?? [];
  }
);

const initialState = {
  items: [],
  yearComparisons: [],
  years: [],
  revenue: [],
};

export const opportunitiesSlice = createSlice({
  name: "opportunitiesSlice",

  initialState: initialState,

  reducers: {
    reset: (state) => {
      state.items = [];
      state.yearComparisons = [];
      state.years = [];
      state.revenue = [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(retrieveOpportunities.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(retrieveOpportunitiesRevenue.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(retrieveOpportunities.fulfilled, (state, action) => {
      state.items = action.payload.map((op) => {
        return {
          id: op.id,
          clientName: op.client_name,
          productType: op.product_type,
          stage: op.stage,
          salesStage: op.sales_stage,
          revenue: op.revenue,
          dateClosed: op.date_closed,
          year: op.year,
        };
      });

      state.yearComparisons = groupByAndSum(state.items);
      state.years = groupByYears(state.items);
    });

    builder.addCase(retrieveOpportunitiesRevenue.fulfilled, (state, action) => {
      state.revenue = action.payload.map((op) => {
        return {
          stage: op.stage,
          total_revenue: op.total_revenue,
          year: op.year,
        };
      });
    });
  },
});

const groupByYears = (data) => {
  const groupedYears = _.groupBy(data, "year");
  return Object.keys(groupedYears);
};

const groupByAndSum = (data) => {
  const result = [
    ...data
      .reduce((r, o) => {
        const key = o.stage + "-" + o.year;
        const shortObj = {
          stage: o.stage,
          year: o.year,
        };

        const item =
          r.get(key) ||
          Object.assign({}, shortObj, {
            revenue: 0,
          });

        item.revenue += o.revenue;

        return r.set(key, item);
      }, new Map())
      .values(),
  ];

  const groupedStages = _.groupBy(result, "stage");

  const stages = Object.keys(groupedStages);
  const groupedData = stages.map((stage) => {
    const currentStage = groupedStages[stage];

    let stageObj = {
      stage: stage,
    };

    currentStage.forEach((item) => {
      stageObj[item.year] = item.revenue;
    });

    return stageObj;
  });

  return groupedData;
};

export const { reset } = opportunitiesSlice.actions;

const { reducer } = opportunitiesSlice;
export default reducer;
