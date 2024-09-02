import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { LoginAuthMutation$data } from '../__generated__/LoginAuthMutation.graphql'


type LoginState = LoginAuthMutation$data['Auth']['login']

type WritableLoginState<T> = {
    -readonly [P in keyof T]: T[P] extends ReadonlyArray<infer U>
      ? Array<WritableLoginState<U>>
      : WritableLoginState<T[P]>;
  };

const initialState: WritableLoginState<LoginState> = {
    accounts: [],
    permissionsInAccounts: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<WritableLoginState<LoginState>>) {
        state.accounts = action.payload?.accounts ?? [],
        state.permissionsInAccounts = action.payload?.permissionsInAccounts ?? []
    }
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
