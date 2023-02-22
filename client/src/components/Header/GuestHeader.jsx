import logo from '../../img/mainImg/logo1.png'
import '../../styles/main.css'
import '../../styles/header.css'


import { useNavigate } from 'react-router-dom';

function GuestHeader () {

    const navigate = useNavigate();

    const toLogin = () =>{
        const loginBtn = document.querySelector('#login');
        navigate('/login');
        loginBtn.style.visibility = 'hidden';
    }

    const toLanding = () =>{
        const loginBtn = document.querySelector('#login');
        navigate('/');
        loginBtn.style.visibility = 'visible';
    }

    return(
    <header className = "d-flex flex-wrap justify-content-around align-items-center mb-4">

        <div className= "d-flex align-items-center justify-content-center text-center col-md-4 col-12">
            <div className = "d-flex justify-content-center align-items-center logo">
                <img src={logo} alt="logo" />
            </div>
        </div>

        <div className = "d-flex align-items-center justify-content-center col-md-4 col-12 text-center mb-3 mb-lg-0 ">
            <div className ="d-flex justify-content-around align-items-center">
                <button className="mx-2 myBtn" onClick={toLanding}>Home</button>
                <button className="mx-2 myBtn">About</button>
                <button className="mx-2 myBtn">Contact</button>
            </div>
        </div>

        <div className = "d-flex align-items-center justify-content-center col-md-4 text-center ">

            <button className='myBtn' id='login' onClick={toLogin}>Login/SignUp</button>

        </div>


    </header>
)
}

export default GuestHeader;