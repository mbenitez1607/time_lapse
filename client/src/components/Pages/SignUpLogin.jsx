import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// Import the firebase auth object, and the functions to create/signin users
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from '../../utils/helpers';
import logo from '../../img/mainImg/logo1.png'
import '../../styles/main.css'
import '../../styles/signLogin.css'


const SignLogin = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else if (inputType === 'password') {
            setPassword(inputValue);
        } else { // password2 (password value confirmation)
            setPassword2(inputValue);
        }
    };

    // Handle form submission here
    const handleSubmit = (e) => {
        e.preventDefault();

        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            console.log(errorMessage);
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
        }
        // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
        if (!checkPassword(password)) {
            setErrorMessage(
                `Choose a more secure password for the account: ${email}`
            );
            console.log(errorMessage);
            return;
        }
        // Last we checked for password2, if it's set we're registering a new user, else we're logging in an existing user
        if (password2) {
            // When signing up a new user verify the password and the confirmation match
            if (password === password2) {
                // Sign up new user
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user.email;
                        console.log(`Welcome ${user}`);
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // ..
                        alert(`Create account error: ${errorCode}, ${errorMessage}}`);
                    });
            }
            else {
                setErrorMessage(
                    `Passwords do not match`
                );
                console.log(errorMessage);
                return;
            }
        }
        else {
            // Login existing user
            signInWithEmailAndPassword(auth, email, password)
                .then(async (userCredential) => {
                    // Signed in
                    // Update user displayName 
                    const user = userCredential.user.email;
                    console.log(`Welcome back ${user}`);
                    const token = await auth?.currentUser?.getIdToken(true);
                    if (token) {
                        localStorage.setItem("@token", token);
                    }
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(`Sign in error: ${errorCode}, ${errorMessage}}`);
                });
        }
        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setEmail('');
        setPassword('');
        setPassword2('');
        // need add condition for navigate to next page
        navigate('/home');
    };

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

    useEffect(() => {
        console.log("I am rendering signPage")
       }, []);
    return (
        <div className="signLoginBox">

            <div className="loginContainer">
                <div className="div-description">
                    <img src={logo} alt="logo" />
                </div>
                <div className="div-form">
                    <form className="form-login">
                        <h1>login</h1>
                        <input type="email" placeholder="Email" value={email} name="email" onChange={handleInputChange} />
                        <input type="password" placeholder="Password" value={password} name="password" onChange={handleInputChange} />
                        <button type="submit" className="myBtn" onClick={handleSubmit}>Login</button>
                        <div className="control">
                            <span>No account yet? <a href="#" onClick={toRegister}>Register</a></span>
                        </div>
                    </form>
                    <form className="form-register disappear">
                        <h1>Register</h1>
                        <input type="text" placeholder="User Name" value={userName} name="userName" onChange={handleInputChange} />
                        <input type="email" placeholder="Email" value={email} name="email" onChange={handleInputChange} />
                        <input type="password" placeholder="Password" value={password} name="password" onChange={handleInputChange} />
                        <input type="password" placeholder="Confirm Password" value={password2} name="password2" onChange={handleInputChange} />
                        <button type="submit" className="myBtn" onClick={handleSubmit}>Register</button>
                        <div className="control">
                            <span>Already have account? <a href="#" onClick={toLogin}>Login</a></span>
                        </div>
                    </form>
                </div>
                <div className="div-description">
                    <img src={logo} alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default SignLogin