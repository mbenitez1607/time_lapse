import Header from './Header';
import Footer from './Footer';
import LandingPage from './Pages/landingPage';
import SignPage from './Pages/SignUpLogin';


import "../styles/main.css"

const PageContainer = () => 
    <div class="pageContainer">

        <Header />
        {/* <LandingPage /> */}
        <SignPage/>
        <Footer />
    </div>

export default PageContainer;
