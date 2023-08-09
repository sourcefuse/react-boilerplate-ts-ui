import {createAsyncThunk} from '@reduxjs/toolkit';

export interface Configuration {
  clientId: string;
  authApiBaseUrl: string;
  appApiBaseUrl?: string;
  enableSessionTimeout: string;
  storageSessionTimeKey?: string;
  expiryTimeInMinute: string;
  promptTimeBeforeIdleInMinute: string;
}

export const fetchConfigData = createAsyncThunk<Configuration, void, {rejectValue: string}>(
  'config/fetchConfigData',
  async (_, {rejectWithValue}) => {
    try {
      const response = await fetch('/config.json');
      return await response.json();
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);
