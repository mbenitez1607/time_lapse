import { Routes, Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import LandingPage from './Pages/landingPage';
import SignPage from './Pages/SignUpLogin';
import Wizard from './Wizard';
import Homepage from './Pages/Homepage';
import UploadImage from "./Pages/uploadPage";
import ProjectPage from "./Pages/ProjectPage";

import "../styles/main.css"

const PageContainer = () =>
    <div className="pageContainer">
        <Header />
            <Routes>
                <Route path= "/" element={<LandingPage />} />
                <Route path= "/login" element={<SignPage />} />
                <Route path="/wizard" element={<Wizard />}/>
                <Route path="/home" element={<Homepage />}/>
                <Route path="/project" element={<ProjectPage/>}/>
                <Route path="/upload" element={<UploadImage/>}/>
            </Routes>
        <Footer />
    </div>

export default PageContainer;
