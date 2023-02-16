import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter,faGithub,faFacebook} from '@fortawesome/free-brands-svg-icons';
import '../styles/main.css';


const Footer = () =>
<footer className="d-flex flex-wrap justify-content-around align-items-center row">

    <div className="col-md-4 d-flex align-items-center text-center">
        <span className="mb-3 mb-md-0 mainColor fs-5">© 2023 Timelapse, Inc All rights reserved.</span>
    </div>

    <ul className="nav col-md-4 justify-content-center justify-content-md-end list-unstyled d-flex">

        <a href="#">
            <li className="m-4">
                    <FontAwesomeIcon icon={faGithub} size="2x" color='#01cb88'/>
            </li>
        </a>
        <a href="#">
            <li className="m-4">
                    <FontAwesomeIcon icon={faTwitter} size="2x" color='#01cb88'/>
            </li>
        </a>

        <a href="#">
            <li className="m-4">
                    <FontAwesomeIcon icon={faFacebook} size="2x" color='#01cb88' />
            </li>
        </a>
    </ul>

</footer>


export default Footer;