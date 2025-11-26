import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface RoomsState {
    id: string,
    name: string,
    lastMessage: string,
    users: string[]
}


// Define the initial state using that type
const initialState: RoomsState[] = [
    {
        id: "roomid",
        name: "채팅방0",
        lastMessage: "테스트 마지막 메시지",
        users: ["114","119"]
    },
]

export const roomsSlice = createSlice({
    name: 'rooms',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addRoom: (state, action: PayloadAction<RoomsState>) => {
            state.push(action.payload);
        },
        // lastMessage 갱신 만들어야함
    },
})

export const { addRoom } = roomsSlice.actions

export default roomsSlice.reducer