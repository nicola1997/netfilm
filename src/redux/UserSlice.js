import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        email: '',
    },
    reducers: {
        setUsernameRedux: (state, action) => {
            state.username = action.payload;
        }, setEmailRedux: (state, action) => {
            state.email = action.payload;
        }, setPasswordRedux: (state, action) => {
            state.password = action.payload;
        },

    },
});

export const {setUsernameRedux, setEmailRedux, setPasswordRedux} = userSlice.actions;
export default userSlice.reducer;
