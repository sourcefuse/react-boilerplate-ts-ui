import {createSlice} from '@reduxjs/toolkit';
import {RootState} from 'redux/store';
import {Configuration, fetchConfigData} from './configThunk';

const initialState: {
  configData: Configuration | null;
  isLoading: boolean;
  error: string | null;
} = {
  configData: null,
  isLoading: false,
  error: null,
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchConfigData.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchConfigData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.configData = action.payload;
      })
      .addCase(fetchConfigData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || null;
      });
  },
});

export default configSlice.reducer;

// Selectors
export const selectConfigData = (state: RootState) => state.config.configData;
