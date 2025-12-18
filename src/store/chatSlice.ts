import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FriendState } from "../types/friend";


export interface ChatMessage {
    roomId: string;
    messageType: number;
    sender: FriendState;
    message: string;
    date: string;
}

interface ChatRoom {
    roomId: string;
    msgs: ChatMessage[];
}

const initialState: ChatRoom[] = [
    {
        roomId: "roomid",
        msgs: [
            { roomId: "roomid", messageType: 2, sender: { id: "system", name: "system", message: "", profile: "" }, message: 'this is test message', date: new Date().toString() },
        ]
    },
]


export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<ChatMessage>) => {
            let msg = action.payload;
            let pid = msg.roomId;
            let idx = state.findIndex(room => room.roomId === pid);

            if (idx === -1) { // 초대된 경우
                console.log("새롭게 방 추가");
                state.push({
                    roomId: msg.roomId,
                    msgs: [msg]
                });
            }
            else {
                state[idx].msgs.push(msg);
            }
        }
    }
})

export const { addMessage } = chatSlice.actions;

export default chatSlice.reducer;