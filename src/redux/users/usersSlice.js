import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
  },
  reducers: {
    addUser(state, action) {
      state.items.push(action.payload);
    },
    deleteUser(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
    },
    updateStatus(state, { payload }) {
      state.items = state.items.map(item => {
        if (item.id === payload) {
          return {
            ...item,
            status: item.status === 'offline' ? 'online' : 'offline',
          };
        } else {
          return item;
        }
      });
    },
  },
});

export default userSlice.reducer;
export const { addUser, deleteUser, updateStatus } = userSlice.actions;
