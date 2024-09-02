import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Home } from './Component/Home';
import { Menu } from './Products/Menu';
import { Login } from './Component/Login';
import { Signup } from './Component/Signup';
import { Survey } from './Order/Survey';
import { isAuthenticated } from './Auth/auth';
import { RecoilRoot } from 'recoil';
import Cart from './Order/Cart';
import { About } from './Products/About';

const App = () => {
    const [loggedIn] = useState(isAuthenticated()); 
    return (
        <div className="App">
            <RecoilRoot>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/menu' element={loggedIn ? <Menu /> : <Navigate to="/login" />} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/survey' element={<Survey />} />
                    <Route path='/about' element={<About />} />
                </Routes>   
            </Router>
            </RecoilRoot>
        </div>
    );
};

export default App;
