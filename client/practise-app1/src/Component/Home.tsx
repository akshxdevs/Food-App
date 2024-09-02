import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated } from '../Auth/auth';
import './Home.css'
import homelogo from '../assets/Frit inn ( original belgium fries ) _ Logo design contest.jpeg'

export const Home = () => {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(isAuthenticated());
    const [username, setUsername] = useState<string>();

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        const isValidUser = isAuthenticated();

        if (storedUsername && isValidUser) {
            setUsername(storedUsername);
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("username");
        setLoggedIn(false);
        navigate("/");
    };

    return (
        <div className="Home">
            {loggedIn ? (
                <div className="sub-home-1">
                    <img className="img-1" src={homelogo} />
                    <h1 className="header-1">Food Ordering App</h1>
                    <div className="main-container-1">
                        <h4 className="header-2">Hey, {username}</h4>
                        <button className="home-button-1" onClick={handleLogout}>Logout</button> 
                    </div>
                    <div className="main-container-2">
                    <p>Get started today!</p>   
                    <Link to='/about' className="link-1">About</Link>
                    <Link to='/menu' className="link-2"> Menu</Link> 
                    </div>
                </div>
            ) : (
                <div className="sub-home-2">
                    <img className="img-1" src={homelogo} />
                    <h1 className="header-3">Food Ordering App</h1>
                    <Link to='/login'><button className="home-button-2">Get Started</button></Link>
                </div>
            )}
        </div>
    );
};
