import React, { Fragment, useEffect, useState } from 'react';
import { Outlet, useNavigate, Routes, Navigate, Route, redirect, BrowserRouter as Router } from 'react-router-dom';
import { withRouter } from './withRouter'
import GuestHeader from './Header/GuestHeader';
import MemberHeader from './Header/MemberHeader';
import Footer from './Footer';
import LandingPage from './Pages/landingPage';
import SignPage from './Pages/SignUpLogin';
import Wizard from './Wizard';
import Homepage from './Pages/Homepage';
import UploadImage from "./Pages/uploadPage";
import ProjectPage from "./Pages/ProjectPage";
import ResultPage from "./Pages/ResultPage";
import "../styles/main.css"
import { auth } from "../firebase";



const PrivateRoute = (props) => {
    console.log("i am in Private")
    const [loaded, setLoaded] = useState(false)
    const [isAuthenticated, setisAuthenticated] = useState(false)
    const [authToken, setauthToken] = useState(false)
    const navigate = useNavigate();

    const checkAuth = async () => {
        const token = localStorage.getItem("@token")
        if (token) {
            setauthToken(token)
            setisAuthenticated(true)
            setLoaded(true)
        }
        else {
            setauthToken(null)
            setisAuthenticated(false)
            setLoaded(true)
        }
    }

    useEffect(() => {
        checkAuth()
    }, [authToken]);

    if (!loaded) return null;

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}


const PublicRoute = (props) => {
    const [loaded, setLoaded] = useState(false)
    const [isAuthenticated, setisAuthenticated] = useState(false)
    const [authToken, setauthToken] = useState(false)


    const checkAuth = () => {
        const token = localStorage.getItem("@token")
        if (token) {
            setauthToken(token)
            setisAuthenticated(true)

        }
        setLoaded(true)
    }

    useEffect(() => {
        checkAuth()
    }, [authToken]);

    if (!loaded) return null;

    return isAuthenticated ? <Navigate to="/home" replace /> : <Outlet />
}

const PageContainer = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    useEffect(() => {
      const token = localStorage.getItem('@token');
      setIsAuthenticated(token != null);
    }, []);
  
    return (
      <div className="pageContainer">
        <Router>
          <Fragment>
            {isAuthenticated ? <MemberHeader /> : <GuestHeader />}
            <Routes>
              <Route exact path="/" element={<PublicRoute />}>
                <Route exact path="/" element={<LandingPage />} />
              </Route>
              <Route exact path="/login" element={<PublicRoute />}>
                <Route exact path="/login" element={<SignPage />} />
              </Route>
              <Route exact path="/wizard" element={<PrivateRoute />}>
                <Route exact path="/wizard" element={<Wizard />} />
              </Route>
              <Route exact path="/home" element={<PrivateRoute />}>
                <Route exact path="/home" element={<Homepage />} />
              </Route>
              <Route exact path="/project/:id" element={<PrivateRoute />}>
                <Route path="/project/:id" element={<ProjectPage />} />
              </Route>
              <Route exact path="/upload/:id" element={<PrivateRoute />}>
                <Route path="/upload/:id" element={<UploadImage />} />
              </Route>
              <Route exact path="/result/" element={<PrivateRoute />}>
                <Route path="/result/*" element={<ResultPage />} />
              </Route>
            </Routes>
          </Fragment>
        </Router>
        <Footer />
      </div>
    );
  };

export default PageContainer;

