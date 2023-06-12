import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const showMenuSlice = createSlice({
  name: 'showMenu',
  initialState: false,
  reducers: {
    setShowMenu: (state) => {
      return !state;
    },
  },
});

export const { setShowMenu } = showMenuSlice.actions;

export default showMenuSlice.reducer;
