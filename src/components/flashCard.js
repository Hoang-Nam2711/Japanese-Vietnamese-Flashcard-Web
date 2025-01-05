import './flashCard.css'
import lesson from "../data/user1.json"
import { useState } from 'react'
// import {Animated} from 'reac-nat' 
import CheckLearntBtn from './checkLearntBtn'

const FlashCard = (props) => {
    let lessonId = props.lessonId
    let cardsInLesson = lesson.find((x)=>{
        return x.id === lessonId
    })


    const [kanjiCard, setCardState] = useState(props.japToVie)
    const [flipCardAnimate, setFlipCardAnimate] = useState(false)
    const [isFirstView, setIsFirstView] = useState(true)
    const [hiraganaMode, setHiraganaMode] = useState(false)
    const [hiraganaModeAnimate, setHiraganaModeAnimate] = useState(false)
    const [cardContent,setCardContent] = useState(cardsInLesson.cards[0].kanji)
    
    function viewMeaning(){
        if(kanjiCard){
            setCardContent(cardsInLesson.cards[0].meaning)
        }else{
            setCardContent(cardsInLesson.cards[0].kanji)
        }
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
    
    return(
        <div>

            <div className={`flash-card 
                ${flipCardAnimate ? 'flash-card-animation' : ''}`
                }>
                <div className={`card-content-border 
                    ${flipCardAnimate ? 'card-content-border-deanimation' : ''}`
                    } onClick={viewMeaning}>
                    <div className="card-kanji-meaning-div">
                        <p className="card-kanji"> {cardContent} </p> 
                        {
                            kanjiCard ?
                                <div className={`kanji-hiragana 
                                                ${hiraganaModeAnimate ? 'kanji-hiragana-animation' : ''}`
                                                } 
                                        onClick={e => hiraganView(e)}> 
                                    <p className={`mode
                                                ${hiraganaModeAnimate ? 'mode-animation' : ''}`
                                                }>
                                        {hiraganaMode ? "漢" : "あ"}
                                    </p>
                                </div>
                            :null
                        }
                    </div>
                    <div className="card-hiragana-div">
                        <p className={`card-hiragana
                                        ${isFirstView ? '' : 
                                        hiraganaMode ? 'card-hiragana-animation' : 'card-hiragana-deanimation'}`
                                    }>
                            {cardsInLesson.cards[0].hiragana}
                        </p>
                    </div>
                </div>
            </div>
            <div className='checkBtns'>
                <CheckLearntBtn isLearnt={true}/>
                <CheckLearntBtn isLearnt={false}/>
            </div>
        </div>
    )
}

export default FlashCard;