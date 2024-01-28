import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
   token: localStorage.getItem('token') ? localStorage.getItem('token'): null,
}
const userSlice = createSlice({
   name:'user',
   initialState,
   reducers:{
     setCredentials: (state, action)=>{
        state.userInfo = action.payload;
        localStorage.setItem('userInfo', JSON.stringify(action.payload));
     },
     logout: (state, action) => {
       state.userInfo = null;
       state.token = null;
       localStorage.removeItem('userInfo');
       localStorage.removeItem('token');
     },
     setToken: (state, action)=>{
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
     },
     tokenExpired: (state) => {
      state.userInfo = null;
      state.token = null;
      localStorage.removeItem('userInfo');
      localStorage.removeItem('token');
    }

   }
});

export const {setCredentials, logout, setToken, tokenExpired} = userSlice.actions;
export default userSlice.reducer;