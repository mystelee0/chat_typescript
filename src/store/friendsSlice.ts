import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type { FriendState } from '../types/friend'

// Define the initial state using that type
const initialState: FriendState[] = [
    {
        id: "114",
        name: "테스트유저 114",
        message: "상태메시지2",
        profile: "114_profile.jpg"
    },
    {
        id: "119",
        name: "테스트유저 119",
        message: "상태메시지3",
        profile: "119_profile.png"
    },
    {
        id: "911",
        name: "테스트유저 911",
        message: "상태메시지4",
        profile: "911_profile.png"
    },
]

export const friendsSlice = createSlice({
    name: 'friends',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addFriend: (state, action: PayloadAction<FriendState>) => {
            return [...state,action.payload];
        },
    },
})

export const { addFriend } = friendsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectProfileById = (state: RootState, id: string): string =>
    state.friends.find(f => f.id == id)?.profile ?? "";

export default friendsSlice.reducer