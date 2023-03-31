import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'appSlice',
    initialState: {
        value: {
            appTheme: 'light',
            isMain: true
        }
    },
    reducers: {
        toggleTheme: (state) => {
            state.value.appTheme = state.value.appTheme === 'light' ? 'dark' : 'light' ;
        },
        toggleMain: (state) => {
            state.value.isMain = !state.value.isMain;
        }
    }
});

export const { toggleTheme, toggleMain } = slice.actions;

export const appTheme = state => state.appSlice.value.appTheme;
export const isMain = state => state.appSlice.value.isMain;

export default slice.reducer;