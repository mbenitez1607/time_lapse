import { Routes, Route } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import LandingPage from './Pages/landingPage';
import SignPage from './Pages/SignUpLogin';
import Wizard from './Wizard'


import "../styles/main.css"

const PageContainer = () =>
    <div className="pageContainer">
        <Header />
            <Routes>
                <Route path={"/"} element={<LandingPage />} />
                <Route path={"/login"} element={<SignPage />} />
            </Routes>
        <Footer />
    </div>

export default PageContainer;
