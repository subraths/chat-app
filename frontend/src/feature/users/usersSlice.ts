import { createSlice } from "@reduxjs/toolkit";

const dummyUser: User[] = [
  {
    userId: 1,
    name: "John H",
    email: "john@mail.com",
    messages: [
      {
        1: "hello steve, how's life",
      },
      {
        2: "hi steve, all good here, wby",
      },
      {
        1: "good",
      },
    ],
  },
  {
    userId: 2,
    name: "Steve S",
    email: "steve@mail.com",
    messages: [
      {
        2: "hello john, how's life",
      },
      {
        1: "hi steve, all good here, wby",
      },
      {
        2: "good",
      },
    ],
  },
];

export type User = {
  userId: number;
  name: string;
  email: string;
  messages: Message[];
};

export type Message = {
  [k: string]: string;
};

const initialState: {
  users: User[];
} = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState: dummyUser,
  reducers: {},
});

export default usersSlice.reducer;
