import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { LoginAuthMutation$data } from '../components/__generated__/LoginAuthMutation.graphql'

type WriteableData<T> = { -readonly [P in keyof T]: WriteableData<T[P]> };
type UserStore = WriteableData<LoginAuthMutation$data['Auth']['login']>

const initialState: UserStore = {
    accounts: [],
    permissionsInAccounts: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, { payload }: PayloadAction<UserStore>) {
        state.accounts = payload?.accounts ?? [];
        state.permissionsInAccounts = payload?.permissionsInAccounts ?? [];
    },
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
