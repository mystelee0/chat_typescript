import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type { UserState } from '../types/user'

// Define the initial state using that type
const initialState: UserState = {
  id:"",
  name:"",
  profile:"",
  message:""
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (_tate, action: PayloadAction<UserState>) => {
      console.log("setUser 호출");
      return action.payload;
    },
  },
})

export const { setUser } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user

export default userSlice.reducer