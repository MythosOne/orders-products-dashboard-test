import { createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface FilterState {
  value: string;
}

const initialState: FilterState = {
  value: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.value = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const selectFilter = (state: RootState) => state.filter.value;

export default filterSlice.reducer;
