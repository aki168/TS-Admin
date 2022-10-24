import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'



export interface TabState {
  curTab: any[]
  currentTab?: string | undefined
  status?: 'idle' | 'loading'
  reloadPath: string
}

const initialState: TabState = {
  curTab: [],
  reloadPath: 'null'
}

// Thunk是一個以action為本的包裹器
// below is called a thunk action: `dispatch(incrementAsync(10))`
export const demoAsync = createAsyncThunk(
  'demo/fetch-data',
  async (data: any) => {
    const res = await new Promise<{ data: any }>((resolve) =>
      setTimeout(() => resolve({ data }), 200)
    )
    return res.data
  }
)

export const tabSlice = createSlice({
  name: 'tab',
  initialState,

  reducers: {
    setTabs: (state, action: PayloadAction<any[]>) => {
      state.curTab = action.payload
    },
    setCurrentTab: (state, action) => {
      state.currentTab = action.payload
    },
    setReloadPath: (state, action) => {
      state.reloadPath = action.payload
    }
  },

  //* A callback that receives a *builder* object to define
  //* case reducers via calls to `builder.addCase(actionCreatorOrType, reducer)`.
  extraReducers: (builder) => {
    builder
      .addCase(demoAsync.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(demoAsync.fulfilled, (state, action) => {
        state.status = 'idle'
        state.currentTab = action.payload
      })
  }
})

export const { setTabs, setCurrentTab, setReloadPath } = tabSlice.actions


export const selecTabs = (state: RootState) => state.tab.curTab
export const selectCurrentTab = (state: RootState) => state.tab.currentTab
export const selectReloadPath = (state: RootState) => state.tab.reloadPath


export default tabSlice.reducer
