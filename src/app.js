import { Routes, Route, Navigate, } from 'react-router-dom';
import Navbar from './routes/navbar';
import ErrorPage from './error';
import Contact from './routes/contact';
import Home from './routes/home';
import Certs from './routes/certs';
import Projects from './routes/projects';
  export default function App() {
    return (
        <div className='mainContainer'>
            <Navbar/>
            <div className='rootBody'>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/home" />} />
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/certs" element={<Certs/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                </Routes>
            </div>
        </div>
    );
  }