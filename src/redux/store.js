import {configureStore} from '@reduxjs/toolkit'
import moviesReducer from '../redux/MovieSlice.js'

export default configureStore({
    reducer: {
        movies: moviesReducer,
    },
})