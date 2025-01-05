import './App.css';
import FlashCard from './components/flashCard';
import Header from './components/header';
import lessons from "./data/user1.json"

function App() {
  return (
    <div className="App">
      <Header />
      <FlashCard lessonId={lessons[0].id} japToVie={true}/>
    </div>
  );
}

export default App;
