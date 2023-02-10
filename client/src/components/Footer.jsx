import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter,faGithub,faFacebook} from '@fortawesome/free-brands-svg-icons';
import '../styles/main.css';


const Footer = () =>
<footer class="d-flex flex-wrap justify-content-around align-items-center row">

    <div class="col-md-4 d-flex align-items-center text-center">
        <span class="mb-3 mb-md-0 mainColor fs-5">© 2023 Timelapse, Inc All rights reserved.</span>
    </div>

    <ul class="nav col-md-4 justify-content-center justify-content-md-end list-unstyled d-flex">

        <a href="#">
            <li class="m-4">
                    <FontAwesomeIcon icon={faGithub} size="2x" color='#01cb88'/>
            </li>
        </a>
        <a href="#">
            <li class="m-4">
                    <FontAwesomeIcon icon={faTwitter} size="2x" color='#01cb88'/>
            </li>
        </a>

        <a href="#">
            <li class="m-4">
                    <FontAwesomeIcon icon={faFacebook} size="2x" color='#01cb88' />
            </li>
        </a>
    </ul>

</footer>


export default Footer;