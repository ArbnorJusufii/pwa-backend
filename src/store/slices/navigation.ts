'use client';

import { INavigationInitialState } from '@/types/Redux/INavigationInitialState';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: INavigationInitialState = {
    sideBarOpen: false,
    navigationRightOpen: false,
};

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        updateSidebarOpen: (
            state: INavigationInitialState,
            action: PayloadAction<boolean>
        ) => {
            state.sideBarOpen = action.payload;
        },
        updateNavigationRightOpen: (
            state: INavigationInitialState,
            action: PayloadAction<boolean>
        ) => {
            state.navigationRightOpen = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { updateSidebarOpen, updateNavigationRightOpen } =
    navigationSlice.actions;

export default navigationSlice.reducer;
