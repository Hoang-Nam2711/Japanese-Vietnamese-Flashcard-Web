import './App.css';
import FlashCard from '../components/flashCard/flashCard';
import Header from '../components/header';
import lessons from "../data/user1.json"

function CardPage() {
  let lessonName = lessons[0].lessonName
  return (
    <div className="CardPage">
      <Header centralAlign={lessonName.toUpperCase()} />
      <FlashCard lessonId={lessons[0].id} japToVie={true}/>
    </div>
  );
}

export default CardPage;
