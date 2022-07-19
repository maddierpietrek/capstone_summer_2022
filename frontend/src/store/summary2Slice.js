import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Summary2DataService from "../services/summary2.service";

export const retrieveSummary2 = createAsyncThunk(
  "summary2/retreive",
  async () => {
    const res = await Summary2DataService.getAll();
    // console.log(res);
    const [first] = res.data;
    return first ?? {};
  }
);

const initialState = {
  id: 0,
  loading: false,
  avgLoan: 0,
  avgCredit: 0,
  depositBal: 0,
};

export const summary2Slice = createSlice({
  name: "summary2Slice",

  initialState: initialState,

  reducers: {
    reset: (state) => {
      state.id = 0;
      state.loading = false;
      state.avgLoan = 0;
      state.avgCredit = 0;
      state.depositBal = 0;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(retrieveSummary2.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(retrieveSummary2.fulfilled, (state, action) => {
      state.avgLoan = action.payload.ttm_avg_loan_bal;
      state.avgCredit = action.payload.ttm_avg_credit_comm;
      state.depositBal = action.payload.ttm_dep_bal;
      state.loading = false;
    });
  },
});

export const { reset } = summary2Slice.actions;

const { reducer } = summary2Slice;
export default reducer;
