import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/store'
import { UserInfo } from '@/app_modals/user'

export interface UserState {
  UserInfo: UserInfo & { is_ordic_user: boolean}
}

const initialState: UserState = {
  UserInfo: {
    username: '',
    displayName: '',
    permission: [],
    token:'',
    is_ordic_user: false
  }
}

export const userSlice = createSlice({
  name:'user',
  initialState,

  reducers:{
    setUserInfo: (state, action) => {
      state.UserInfo = action.payload
    }
  }
})

export const { setUserInfo } = userSlice.actions

export const selectUserInfo = (state: RootState) => state.user.UserInfo

export default userSlice.reducer

