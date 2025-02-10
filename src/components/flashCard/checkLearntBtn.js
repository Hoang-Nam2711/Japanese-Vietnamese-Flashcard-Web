import "./checkLearntBtn.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faXmark} from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";

const CheckLearntBtn = (props) => {
    let isLearnt = props.isLearnt
    let btnColor = isLearnt? "rgb(62 123 40)" : "rgb(212 94 27)"
    let boxShadow = isLearnt? "5px 5px #85A947" : "5px 5px rgb(144 93 58)"

    let [opacity, setOpacity] = useState(1)
    let changeOpacity = () => {
        setOpacity(0.2)
        setTimeout(()=>{setOpacity(1)},200);
    }
    return(
        <div className="checkBtn" 
            style={{borderColor: btnColor,
                    backgroundColor:btnColor,
                    boxShadow: boxShadow,
                    opacity : opacity,
                    transition: "opacity 0.5s ease"}}
            onClick={props.clickFunc}
        >
            <p > {isLearnt ? "Đã Học" : "Học Lại"} </p>
            <FontAwesomeIcon icon={isLearnt ? faCheck : faXmark} />
        </div>
    )
}

export default CheckLearntBtn;