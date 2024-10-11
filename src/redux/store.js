import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../redux/MovieSlice.js';
import userReducer from '../redux/UserSlice.js'; // Importa il nuovo reducer

export default configureStore({
    reducer: {
        movies: moviesReducer,
        user: userReducer,
        
    },
});
