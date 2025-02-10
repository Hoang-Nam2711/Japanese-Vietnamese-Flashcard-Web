import "./card.css"
import lesson from "../../data/user1.json"
import { useState, useEffect } from 'react'
import './flashCard.css'

const Card = (props) => {
    let lessonId = props.lessonId
    let cardsInLesson = lesson.find((x)=>{
        return x.id === lessonId
    })
    const [kanjiCard, setCardState] = useState(props.japToView)
    const [flipCardAnimate, setFlipCardAnimate] = useState(false)
    const [isFirstView, setIsFirstView] = useState(true)
    const [hiraganaMode, setHiraganaMode] = useState(false)
    const [hiraganaModeAnimate, setHiraganaModeAnimate] = useState(false)
    const [isReview, setIsReview] = useState("")

    function viewMeaning(){
        setCardState(!kanjiCard)
        setHiraganaMode(false)
        setFlipCardAnimate(false)
        setTimeout(()=>{setFlipCardAnimate(true)},0.5);
    }

    function hiraganView(e){
        setIsFirstView(false)
        setHiraganaModeAnimate(false)
        setTimeout(()=>{setHiraganaModeAnimate(true)},0.5);
        e.stopPropagation()
        setHiraganaMode(!hiraganaMode)
    }

    useEffect(()=>{
        setIsReview(props.isReview)
    })

    useEffect(()=>{
        setCardState(true)
    },[props.cardContentId])

    return(
        <div className={`flash-card 
            ${isReview}
            ${flipCardAnimate ? 'flash-card-animation' : ''}`
            } onAnimationEnd={() => setIsReview("")}>
            <div className={`card-content-border 
                ${flipCardAnimate ? 'card-content-border-deanimation' : ''}`
                } onClick={viewMeaning}>
                <div className="card-kanji-meaning-div">
                    <p className={kanjiCard ? "japanese" : "vietEng"}> 
                        {kanjiCard? 
                        cardsInLesson.cards[props.cardContentId].kanji : 
                        cardsInLesson.cards[props.cardContentId].meaning} 
                    </p> 
                    {
                        kanjiCard ?
                            <div className={`kanji-hiragana 
                                            ${hiraganaModeAnimate ? 'kanji-hiragana-animation' : ''}`
                                            } 
                                    onClick={e => hiraganView(e)}> 
                                <p className={`mode japanese
                                            ${hiraganaModeAnimate ? 'mode-animation' : ''}`
                                            }>
                                    {hiraganaMode ? "漢" : "あ"}
                                </p>
                            </div>
                        :null
                    }
                </div>
                <div className="card-hiragana-div">
                    <p className={`card-hiragana japanese
                                    ${isFirstView ? '' : 
                                    hiraganaMode ? 'card-hiragana-animation' : 'card-hiragana-deanimation'}`
                                }>
                        {cardsInLesson.cards[props.cardContentId].hiragana}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card;