import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "./profileSlice";
import clientSlice from "./clientSlice";
import summary1Slice from "./summary1Slice";
import summary2Slice from "./summary2Slice";
import opportunitiesSlice from "./opportunitiesSlice";

const reducers = {
  profile: profileSlice,
  client: clientSlice,
  summary1: summary1Slice,
  summary2: summary2Slice,
  opportunitiesStore: opportunitiesSlice,
};

export const store = configureStore({
  reducer: reducers,
  devTools: true,
});
