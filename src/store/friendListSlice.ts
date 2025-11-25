import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface FriendState {
    id: string,
    name: string,
    message: string,
    profile: string
}


// Define the initial state using that type
const initialState: FriendState[] = [
    {
        id: "01011112222",
        name: "테스트유저2",
        message: "상태메시지2",
        profile: "/profile.jpg"
    },
    {
        id: "01011113333",
        name: "테스트유저3",
        message: "상태메시지3",
        profile: "/profile.jpg"
    },
]

export const friendListSlice = createSlice({
    name: 'friends',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addFriend: (state, action: PayloadAction<FriendState>) => {
            return [...state,action.payload];
        },
    },
})

export const { addFriend } = friendListSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user

export default friendListSlice.reducer