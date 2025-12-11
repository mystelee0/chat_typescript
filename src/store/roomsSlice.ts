import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface RoomsState {
    roomId: string,
    name: string,
    lastMessage: string,
    users: string[]
}


// Define the initial state using that type
const initialState: RoomsState[] = [
    {
        roomId: "roomid",
        name: "채팅방0",
        lastMessage: "테스트 마지막 메시지",
        users: ["114","119"]
    },
    {
        roomId: "roomid2",
        name: "채팅방1",
        lastMessage: "테스트 마지막 메시지2",
        users: ["114","119","911"]
    },
]

export const roomsSlice = createSlice({
    name: 'rooms',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // 새로운 채팅방 생성
        addRoom: (state, action: PayloadAction<RoomsState>) => {
            state.push(action.payload);
        },
        // 채팅방 삭제
        removeRoom: (state, action: PayloadAction<string>) => {
            return state.filter(room => room.roomId !== action.payload);
        },
        // 메시지 수신 후 lastMessage 수정
        updateLastMessage: (state, action: PayloadAction<{ id: string; lastMessage: string }>) => {
            const room = state.find(r => r.roomId === action.payload.id);
            if (room) room.lastMessage = action.payload.lastMessage;
        },
        // 친구초대
        addUserToRoom: (state, action: PayloadAction<{ id: string; user: string }>) => {
            const room = state.find(r => r.roomId === action.payload.id);
            if (room && !room.users.includes(action.payload.user)) {
                room.users.push(action.payload.user);
            }
        },
        // 친구 방 나감
        removeUserFromRoom: (state, action: PayloadAction<{ id: string; user: string }>) => {
            const room = state.find(r => r.roomId === action.payload.id);
            if (room) {
                room.users = room.users.filter(u => u !== action.payload.user);
            }
        }
    },
})

export const { addRoom, removeRoom, updateLastMessage, addUserToRoom, removeUserFromRoom } = roomsSlice.actions

export default roomsSlice.reducer