import {useState} from 'react'
import './App.css'
import Navbar from "./components/NavBar.jsx";
function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <Navbar></Navbar>
        </div>
    )
}

export default App
