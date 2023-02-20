import { Routes, Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import LandingPage from './Pages/landingPage';
import SignPage from './Pages/SignUpLogin';
import Wizard from './Wizard';
import Homepage from './Pages/Homepage';
import UploadImage from "./Pages/uploadPage";
import ProjectPage from "./Pages/ProjectPage";
import ResultPage from "./Pages/ResultPage";
import "../styles/main.css"

function PageContainer() {

    return (
        <div className="pageContainer">
            <Header />
            <Routes>
                <Route path= "/" element={<LandingPage />} />
                <Route path= "/login" element={<SignPage />} />
                <Route path="/wizard" element={<Wizard />}/>
                <Route path="/home" element={<Homepage />}/>
                <Route path="/project/:id" element={<ProjectPage/>}/>
                <Route path="/upload/:id" element={<UploadImage/>}/>
                <Route path="/result/*" element={<ResultPage/>}/>
            </Routes>
            <Footer />
        </div>
    )
}

export default PageContainer;
