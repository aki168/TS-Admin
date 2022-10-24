import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/store'

export interface AppState {
  theme: string
  collapsed: boolean
  menuMode: 'horizontal' | 'vertical'
}

const initialState: AppState = {
  theme: 'dark',
  collapsed: false,
  menuMode: 'horizontal'
}

export const appSlicer = createSlice({
  name: 'app',
  initialState,

  reducers:{
    setTheme(state, action) {
      state.theme = action.payload
    },
    setCollapsed(state, action) {
      state.collapsed = action.payload
    },
    setMenuMode(state, action) {
      state.menuMode = action.payload
    }
  }
})


export const { setTheme, setCollapsed, setMenuMode } = appSlicer.actions

export const selectTheme = (state: RootState) => state.app.theme

export default appSlicer.reducer

