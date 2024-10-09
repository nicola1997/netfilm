import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import store from "./redux/store.js";
import {createBrowserRouter} from "react-router-dom";
import User from "./components/User.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/user",
        element: <User/>,
    },


]);

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <StrictMode>
            <App/>
        </StrictMode>,
    </Provider>
)
