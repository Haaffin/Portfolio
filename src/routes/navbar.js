import '../css/App.css'
import { Link } from 'react-router-dom'

export default function Navbar(){
    return(
        <div id="Home">
            <div  className='navbar'>
                    <Link to='/home'>Home</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/certs'>Certifications</Link>
                    <Link to='/contact'>Contact Links</Link>
            </div>
        </div>
    )
}