import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        email: '',
        password: '',
        name: '',
        surname: '',
        birthdate: '',
        bio: '',
    },
    reducers: {
        setUsernameRedux: (state, action) => {
            state.username = action.payload;
        },
        setEmailRedux: (state, action) => {
            state.email = action.payload;
        },
        setPasswordRedux: (state, action) => {
            state.password = action.payload;
        },
        setNameRedux: (state, action) => {
            state.name = action.payload;
        },
        setSurnameRedux: (state, action) => {
            state.surname = action.payload;
        },
        setBirthdateRedux: (state, action) => {
            state.birthdate = action.payload;
        },
        setBioRedux: (state, action) => {
            state.bio = action.payload;
        },
    },
});

export const {
    setUsernameRedux,
    setEmailRedux,
    setPasswordRedux,
    setNameRedux,
    setSurnameRedux,
    setBirthdateRedux,
    setBioRedux
} = userSlice.actions;
export default userSlice.reducer;
