import './flashCard.css'
import lesson from "../../data/user1.json"
import { useState, useCallback, useEffect } from 'react'
import Card from "./card"
import CheckLearntBtn from './checkLearntBtn'
import ProgressBar from '../progressBar'

const FlashCard = (props) => {
    const [cardContentId,setCardContentId] = useState(0)
    const [reviewCardsId, addReviewCardsId] = useState([])
    const [animationClass, setAnimationClass] = useState("")
    const [successNo, updateSuccessNo] = useState(0)
    const [failedNo, updateFailedNo] = useState(0)

    function nextCard(){
        setCardContentId(cardContentId + 1)
        setAnimationClass("swipeUpAnimation")
        let newSucessNo = successNo + 1
        updateSuccessNo(newSucessNo)
    }

    function reviewCard(){
        setAnimationClass("swipeDownAnimation")
        let reviewCardsIdTemp = [...reviewCardsId, cardContentId]
        addReviewCardsId(reviewCardsIdTemp)
        setCardContentId(cardContentId + 1)
        let newFailedNo = failedNo + 1
        updateFailedNo(newFailedNo)
    }
    
    return(
        <div className='container'>
            <ProgressBar success={successNo} fail={failedNo} 
                        successPer={(successNo/lesson.length)*100} failPer={(failedNo/lesson.length)*100}/>
            <Card isReview={animationClass}
                lessonId={props.lessonId} japToVie={props.japToVie} cardContentId={cardContentId}/>
            <div className='checkBtns'>
                <CheckLearntBtn clickFunc={nextCard} isLearnt={true}/>
                <CheckLearntBtn clickFunc={reviewCard} isLearnt={false}/>
            </div>
        </div>
    )
}

export default FlashCard;