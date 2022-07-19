import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import BarChartDataService from "../services/barchart.service";

export const retrieveBarChart = createAsyncThunk(
  "barchart/retreive",
  async () => {
    const res = await BarChartDataService.getAll();
    // console.log(res);
    const [first] = res.data;
    return first ?? {};
  }
);

const initialState = {
  loanProdY1: 0,
  loanProdY2: 0,
  depGrowthY1: 0,
  depGrowthY2: 0,
  tmGrowthY1: 0,
  tmGrowthY2: 0,
  newClientsY1: 0,
  newClientsY2: 0,
  avgOverallRmSatY1: 0,
  avgOverallRmSatY2: 0,
  clientCallsY1: 0,
  clientCallsY2: 0,
  prospectCallsY1: 0,
  prospectCallsY2: 0,
  stratUploadedY1: 0,
  stratUploadedY2: 0,
};

export const barSlice = createSlice({
  name: "barSlice",

  initialState: initialState,

  reducers: {
    reset: (state) => {
      state.loanProdY1 = 0;
      state.loanProdY2 = 0;
      state.depGrowthY1 = 0;
      state.depGrowthY2 = 0;
      state.tmGrowthY1 = 0;
      state.tmGrowthY2 = 0;
      state.newClientsY1 = 0;
      state.newClientsY2 = 0;

      state.avgOverallRmSatY1 = 0;
      state.avgOverallRmSatY2 = 0;
      state.clientCallsY1 = 0;
      state.clientCallsY2 = 0;
      state.prospectCallsY1 = 0;
      state.prospectCallsY2 = 0;
      state.stratUploadedY1 = 0;
      state.stratUploadedY2 = 0;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(retrieveBarChart.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(retrieveBarChart.fulfilled, (state, action) => {
      state.loanProdY1 = action.payload.loan_prod_y1;
      state.loanProdY2 = action.payload.loan_prod_y2;
      state.depGrowthY1 = action.payload.dep_growth_y1;
      state.depGrowthY2 = action.payload.dep_growth_y2;
      state.tmGrowthY1 = action.payload.tm_growth_y1;
      state.tmGrowthY2 = action.payload.tm_growth_y2;
      state.newClientsY1 = action.payload.new_clients_y1;
      state.newClientsY2 = action.payload.new_clients_y2;

      state.avgOverallRmSatY1 = action.payload.avg_overall_rm_sat_y1;
      state.avgOverallRmSatY2 = action.payload.avg_overall_rm_sat_y2;
      state.clientCallsY1 = action.payload.client_calls_y1;
      state.clientCallsY2 = action.payload.client_calls_y2;
      state.prospectCallsY1 = action.payload.prospect_calls_y1;
      state.prospectCallsY2 = action.payload.prospect_calls_y2;
      state.stratUploadedY1 = action.payload.strat_uploaded_y1;
      state.stratUploadedY2 = action.payload.strat_uploaded_y2;
    });
  },
});

export const { reset } = barSlice.actions;

const { reducer } = barSlice;
export default reducer;
