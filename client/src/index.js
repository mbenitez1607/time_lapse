import React from 'react';
/* From timelapse

root.render(
      <App />
);*/

import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './index.css';
import App from './App';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import SignIn from './routes/SignIn';
import { AuthProvider } from './auth';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';
import SignUp from './routes/SignUp';

import LandingPage from './components/Pages/landingPage';
import SignPage from './components/Pages/SignUpLogin';
import Wizard from './components/Wizard';
import Homepage from './components/Pages/Homepage';
import UploadImage from "./components/Pages/uploadPage";
import ProjectPage from "./components/Pages/ProjectPage";
//import Protected from "./components/Protected";

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
                {/*<Route path= "/" element={<LandingPage />} />*/}
                <Route path= "/login" element={<SignPage />} />
                <Route path="/wizard" element={<Wizard />}/>
                <Route path="/home" element={<Homepage />}/>
                <Route path="/project/:id" element={<ProjectPage/>}/>
                <Route path="/upload" element={<UploadImage/>}/>

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

