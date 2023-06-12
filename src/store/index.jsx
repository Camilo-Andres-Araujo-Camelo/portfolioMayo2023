import { configureStore } from '@reduxjs/toolkit';
import showMenuSlice from './slices/showMenu.slice';
// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
  reducer: {
    showMenu: showMenuSlice,
  },
});
