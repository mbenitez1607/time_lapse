import logo from '../../img/mainImg/logo1.png'

import '../../styles/main.css'
import '../../styles/signLogin.css'

const signLogin = () => 

<div className="signLoginBox">

    <div className="loginContainer">
    <div className="div-description">
        <img src={logo} alt="logo"/>
    </div>
    <div className="div-form">
        <form className="form-login">
            <h1>login</h1>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <button type="submit" className="myBtn">Login</button>
            <div className="control">
                <span>No account yet? <a href="#" onClick={toRegister}>Register</a></span>
            </div>
        </form>
        <form className="form-register disappear">
            <h1>Register</h1>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <input type="password" placeholder="Confirm Password"/>
            <button type="submit" className="myBtn">Register</button>
            <div className="control">
                <span>Already have account? <a href="#" onClick={toLogin}>Login</a></span>
            </div>
        </form>
    </div>
    <div className="div-description">
        <img src={logo} alt="logo"/>
    </div>
    </div>
</div>  


const toRegister = () => {
    const formContainer = document.querySelector('.div-form')
    const form = document.querySelectorAll('.div-form form')
    form[0].classList.add('disappear')
    form[1].classList.remove('disappear')
    formContainer.style.transform = 'rotateY(180deg)'
}

const toLogin = () => {
    const formContainer = document.querySelector('.div-form')
    const form = document.querySelectorAll('.div-form form')
    form[1].classList.add('disappear')
    form[0].classList.remove('disappear')
    formContainer.style.transform = 'none'
}



export default signLogin