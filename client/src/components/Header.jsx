import logo from '../img/mainImg/logo1.png'
import styles from '../styles/header.module.css'
import '../styles/main.css'



const Header = () =>

<header class = "d-flex flex-wrap justify-content-around align-items-center mb-4">

    <div class= "d-flex align-items-center justify-content-center text-center col-md-4 col-12">
        <div class = "d-flex justify-content-center align-items-center" className={styles.logo}>
            <img src={logo} alt="logo" />
        </div>
    </div>

    <div class = "d-flex align-items-center justify-content-center col-md-4 col-12 text-center mb-3 mb-lg-0">
        <div class ="d-flex justify-content-around align-items-center">
            <button class="mx-2 myBtn">Home</button>
            <button class="mx-2 myBtn">About</button>
            <button class="mx-2 myBtn">Contact</button>
        </div>
    </div>

    <div class = "d-flex align-items-center justify-content-center col-md-4 text-center">

        <button className='myBtn'>Login/SignUp</button>

    </div>


</header>


export default Header;