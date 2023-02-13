import Header from './Header';
import Footer from './Footer';
import LandingPage from './Pages/landingPage';

import "../styles/main.css"

const PageContainer = () => 
    <div class="pageContainer">
        <Header />
        <LandingPage />
        <Footer />
    </div>

export default PageContainer;
