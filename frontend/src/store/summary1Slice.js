import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Summary1DataService from "../services/summary1.service";

export const retrieveSummary1 = createAsyncThunk(
  "summary1/retreive",
  async () => {
    const res = await Summary1DataService.getAll();
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

export const summary1Slice = createSlice({
  name: "summary1Slice",

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
    builder.addCase(retrieveSummary1.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(retrieveSummary1.fulfilled, (state, action) => {
      state.avgLoan = action.payload.avg_loan;
      state.avgCredit = action.payload.avg_credit;
      state.depositBal = action.payload.deposit_bal;
      state.loading = false;
    });
  },
});

export const { reset } = summary1Slice.actions;

const { reducer } = summary1Slice;
export default reducer;
