import '../css/App.css'
import { Outlet } from 'react-router-dom'

export default function Root(){
    return(
        <div id="Navbar">
            Navbar
            <Outlet/>
        </div>
    )
}