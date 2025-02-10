import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import './header.css'

const Header = (props) => {
    return(
        <div className="header">
            <div className="leftAlign">
                <FontAwesomeIcon icon={faBars} />
                <p> Cards </p>
            </div>
            <div className="centerAlign">
                <p> {props.centralAlign} </p>
            </div>
            <div className="rightAlign">
                <p> Japanese Flashcard </p>
            </div>
        </div>
    )
}

export default Header; 