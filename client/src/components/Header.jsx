import logo from '../img/mainImg/logo1.png'
import '../styles/main.css'

const Header = () =>

<header className = "d-flex flex-wrap justify-content-around align-items-center mb-4">

    <div className= "d-flex align-items-center justify-content-center text-center col-md-4 col-12">
        <div className = "d-flex justify-content-center align-items-center" style={{ height: 100}}>
            <img src={logo} alt="logo" style={{ height: 100}}/>
        </div>
    </div>

    <div className = "d-flex align-items-center justify-content-center col-md-4 col-12 text-center mb-3 mb-lg-0">
        <div className ="d-flex justify-content-around align-items-center">
            <button className="mx-2 myBtn">Home</button>
            <button className="mx-2 myBtn">About</button>
            <button className="mx-2 myBtn">Contact</button>
        </div>
    </div>

    <div className = "d-flex align-items-center justify-content-center col-md-4 text-center">

        <button className='myBtn'>Login/SignUp</button>

    </div>


</header>


export default Header;