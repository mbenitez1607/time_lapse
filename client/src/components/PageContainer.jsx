import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import LandingPage from './Pages/landingPage';
/*
import SignPage from './Pages/SignUpLogin';
import Wizard from './Wizard';
import Homepage from './Pages/Homepage';
import UploadImage from "./Pages/uploadPage";
import ProjectPage from "./Pages/ProjectPage";
import Protected from "./Protected";
import { auth } from "../firebase";
*/
import "../styles/main.css"

const PageContainer = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(null);;

    const toLogin = () =>{
        setIsLoggedIn(true);
        PageContainer.setIsLoggedIn = true;
        const loginBtn = document.querySelector('#login');
        navigate('/login');
        loginBtn.style.display = 'none';
        //loginBtn.textContent= "Logout";
    }

    const toLogout = () =>{
        setIsLoggedIn(false);
        const loginBtn = document.querySelector('#login');
/*        auth.signOut().then(function() {
            // Sign-out successful.
            console.log('User Logged Out!');
          }).catch(function(error) {
            // An error happened.
            console.log(error);
          });
*/
          //toLanding();
        navigate('/');
        //loginBtn.style.display = 'inline';
    }

    const logIn = () => {
        setIsLoggedIn(true);
    };
    const logOut = () => {
        setIsLoggedIn(false);
    };
        
    return (
    <div className="pageContainer">
        <Header />
            { isLoggedIn
                ? (<button className='myBtn' id='login' onClick={toLogout} style={{display: 'inline'}}>Logout</button>)
                : (<button className='myBtn' id='login' onClick={toLogin} style={{display: 'inline'}}>Login/SignUp</button>)
            }
        <LandingPage />
{/*
            <Routes>
                <Route path= "/" element={<LandingPage />} />
                <Route path= "/login" element={<SignPage />} />
                <Route path="/wizard" element={<Wizard />}/>
                <Route path="/home" element={<Homepage />}/>
                <Route path="/project/:id" element={<ProjectPage/>}/>
                <Route path="/upload/:id" element={<UploadImage/>}/>
            </Routes>
*/}
        <Footer />
    </div>
    )
}

export default PageContainer;
