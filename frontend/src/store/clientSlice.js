import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ClientDataService from "../services/client.service";

export const retrieveClient = createAsyncThunk("client/retreive", async () => {
  const res = await ClientDataService.getAll();
  // console.log(res);
  const [first] = res.data;
  return first ?? {};
});

const initialState = {
  relationships: 0,
  loading: false,
  creditRelationships: 0,
  ttmRevenue: 0,
  topProspects: 0,
  suspects: 0,
};

export const clientSlice = createSlice({
  name: "clientSlice",

  initialState: initialState,

  reducers: {
    reset: (state) => {
      state.relationships = 0;
      state.loading = false;
      state.creditRelationships = 0;
      state.ttmRevenue = 0;
      state.topProspects = 0;
      state.suspects = 0;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(retrieveClient.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(retrieveClient.fulfilled, (state, action) => {
      state.relationships = action.payload.relationships;
      state.creditRelationships = action.payload.credit_relationships;
      state.ttmRevenue = action.payload.ttm_revenue;
      state.loading = false;
      state.topProspects = action.payload.top_prospects;
      state.suspects = action.payload.suspects;
    });
  },
});

export const { reset } = clientSlice.actions;

const { reducer } = clientSlice;
export default reducer;
