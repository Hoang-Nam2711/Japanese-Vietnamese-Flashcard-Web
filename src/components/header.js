import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import './header.css'

function Header(){
    return(
        <div className="header">
            <div className="leftAlign">
                <FontAwesomeIcon icon={faBars} />
                <p> Left Align </p>
            </div>
            <div className="centerAlign">
                <p> Japanese Card </p>
            </div>
            <div className="rightAlign">
                <p> Right Align </p>
            </div>
        </div>
    )
}

export default Header; 