import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../db";

export const UserSlice = createSlice({
  name: "users",
  initialState: { data },
  reducers: {
    createUser: (state, action) => {
      //   console.log(typeof action.payload);
      //   console.log(typeof state);
      state.data.push(action.payload);
    },
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const uu = state.data.find((user) => user.id == id);
      if (uu) {
        uu.name = name;
        uu.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const uu = state.data.find((user) => user.id == id);
      if (uu) {
        return { data: state.data.filter((f) => f.id !== id) };
      } else {
        return state; // return the original state if the user is not found
      }
    },
  },
});

export const { createUser, updateUser, deleteUser } = UserSlice.actions;
export default UserSlice.reducer;
