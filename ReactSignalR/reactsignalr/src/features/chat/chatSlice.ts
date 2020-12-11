import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChatState {
    count: number;
}

const initialState: ChatState = {
    count: 0,
}