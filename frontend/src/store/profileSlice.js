import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProfileDataService from "../services/profile.service";

export const retrieveProfile = createAsyncThunk(
  "profile/retreive",
  async () => {
    const res = await ProfileDataService.getAll();
    // console.log(res);
    const [first] = res.data;
    return first ?? {};
  }
);

const initialState = {
  id: 0,
  loading: false,
  avatar: "",
  name: "N/A",
  role: "N/A",
  manager: "N/A",
  hireDate: "2022-12-12",
};

export const profileSlice = createSlice({
  name: "profileSlice",

  initialState: initialState,

  reducers: {
    reset: (state) => {
      state.id = 0;
      state.loading = false;
      state.avatar = "";
      state.name = "N/A";
      state.role = "N/A";
      state.manager = "N/A";
      state.hireDate = "2022-12-12";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(retrieveProfile.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(retrieveProfile.fulfilled, (state, action) => {
      state.avatar = action.payload.avatar;
      state.name = action.payload.name;
      state.role = action.payload.role;
      state.manager = action.payload.manager;
      state.loading = false;
      state.hireDate = action.payload.hire_date;
    });
  },
});

export const { reset } = profileSlice.actions;

const { reducer } = profileSlice;
export default reducer;
