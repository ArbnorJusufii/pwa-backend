'use client';

import { ELanguages } from '@/enums/ELanguages';
import { IUser } from '@/types/IUser';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
    language: ELanguages.ENGLISH,
};

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        updateLanguage: (state: any, action: PayloadAction<ELanguages>) => {
            state.language = action.payload;
        },
        updateUser: (state: any, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },
        resetUser: (state: any) => {
            state.user = undefined;
        },
    },
});

// Action creators are generated for each case reducer function
export const { updateLanguage, resetUser, updateUser } = settingsSlice.actions;

export default settingsSlice.reducer;
