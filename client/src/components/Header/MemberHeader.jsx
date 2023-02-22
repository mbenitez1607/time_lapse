import logo from '../../img/mainImg/logo1.png'
import '../../styles/main.css'
import '../../styles/header.css'
import userPicture from '../../img/header/user.png'

import { useNavigate } from 'react-router-dom';

function MemberHeader () {

    const navigate = useNavigate();


    const toHomepage = () =>{
        navigate('/home');
    }

    const logout = () =>{
        localStorage.removeItem('@token');
        navigate('/');
        window.location.reload();
    }

    return(
    <header className = "d-flex flex-wrap justify-content-around align-items-center mb-4">

        <div className= "d-flex align-items-center justify-content-center text-center col-md-4 col-12">
            <div className = "d-flex justify-content-center align-items-center logo">
                <img src={logo} alt="logo"/>
            </div>
        </div>

        <div className = "d-flex align-items-center justify-content-center col-md-4 col-12 text-center mb-3 mb-lg-0 ">
            <div className ="d-flex justify-content-around align-items-center">
                <button className="mx-2 myBtn" onClick={toHomepage}>Home</button>
                <button className="mx-2 myBtn">About</button>
                <button className="mx-2 myBtn">Contact</button>
            </div>
        </div>


        <div className="d-flex col-md-4 pe-3 justify-content-center mb-3 mb-lg-0 dropdown-right" id='userProfile'>
            <button
              className="user-profile dropdown-toggle "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <span id="label-username">username</span> 
              {/* fetch from userdb */}
              <span>
                <img src={userPicture} alt="user picture" />
              </span>
              <ul class="dropdown-menu dropdownText">
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><a class="dropdown-item" onClick={logout}>Log Out</a></li>
              </ul>
            </button>
        </div>


    </header>
)
}

export default MemberHeader;