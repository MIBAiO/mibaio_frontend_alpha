import {createSlice} from '@reduxjs/toolkit'


const initialState = {
  login: false,
  user: null,
}



export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
        //
    },

    setUser: (state, action) => {
      const { data, login} = action.payload;
      state.user = data;
      if (data === null) {
          state.login = false;
      } else {
          state.login = true;
      }
    }
  },
})


export const {setAuth, setUser} = authSlice.actions;

export default authSlice.reducer;
