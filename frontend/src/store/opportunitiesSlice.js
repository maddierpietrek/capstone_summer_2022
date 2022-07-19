import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import OpportunitiesDataService from "../services/opportunities.service";

export const retrieveOpportunities = createAsyncThunk(
  "opportunities/retreive",
  async () => {
    const res = await OpportunitiesDataService.getAll();
    // console.log(res);
    return res.data ?? [];
  }
);

const initialState = {
  items: [],
  yearComparisons: [],
};

export const opportunitiesSlice = createSlice({
  name: "opportunitiesSlice",

  initialState: initialState,

  reducers: {
    reset: (state) => {
      state.items = [];
      state.yearComparisons = [];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(retrieveOpportunities.pending, (state) => {
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
        };
      });

      state.yearComparisons = groupByAndSum(state.items);
    });
  },
});

const groupByAndSum = (data) => {
  const result = [
    ...data
      .reduce((r, o) => {
        const key = o.stage + "-" + o.dateClosed.substring(0, 4);
        const shortObj = {
          stage: o.stage,
          year: o.dateClosed.substring(0, 4),
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

  return result;
};

export const { reset } = opportunitiesSlice.actions;

const { reducer } = opportunitiesSlice;
export default reducer;
