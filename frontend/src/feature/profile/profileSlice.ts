import { createSlice } from "@reduxjs/toolkit";

export type Profile = {
  name: string;
  userId: number;
  email: string;
};

const initialState: Profile = {
  name: "",
  userId: 0,
  email: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
});

export default profileSlice.reducer;
