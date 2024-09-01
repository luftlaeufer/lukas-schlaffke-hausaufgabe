import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// TODO: Type comes from __generated Login
const initialState = {
    test: '123',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // setView(state, { payload: { name } }: PayloadAction<View>) {
    //   state.name = name
    // },
  },
})

// export const { setView } = userSlice.actions

export default userSlice.reducer
