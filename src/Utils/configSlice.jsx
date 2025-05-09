import { createSlice } from '@reduxjs/toolkit';

const configSlice = createSlice({
  name: 'config',
  initialState: {
    Language: 'en'
  },
  reducers: {
    setLanguage: (state, action) => {
      state.Language = action.payload;
    },
  },
});

// Export the action
export const { setLanguage } = configSlice.actions;

// Export the reducer
export default configSlice.reducer;
