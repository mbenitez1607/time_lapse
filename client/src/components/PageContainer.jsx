import Header from './Header';
import Footer from './Footer';
import LandingPage from './Pages/landingPage';
import SignPage from './Pages/SignUpLogin';
import Wizard from './Wizard'


import "../styles/main.css"

const PageContainer = () => 
    <div class="pageContainer">

        <Header />
        <LandingPage />
        {/* <SignPage/> */}
        {/* <Wizard /> */}
        <Footer />
    </div>

export default PageContainer;
