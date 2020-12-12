import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { stat } from 'fs';
import { RootState } from '../../app/store'

interface ChatState {
    messages: string[];
}

const initialState: ChatState = {
    messages: [],
}

let chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers:{
        addMessage: (state: ChatState, action:PayloadAction<string>) => {
            state.messages.push(action.payload)
            return state;
        } 
    }
})

export const { addMessage } = chatSlice.actions;

export const selectMessages = (state: RootState) => state.chat.messages;

export default chatSlice.reducer;