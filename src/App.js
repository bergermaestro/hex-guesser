import BottomLinks from './components/BottomLinks';
import NavBar from './components/NavBar';
import TopAlert from './components/TopAlert';
import Game from './components/Game';

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen">
      <TopAlert />
      <div className="max-w-screen-xl mx-auto flex flex-col place-content-between min-h-screen my-[-4rem] pt-24">
        <NavBar />

        <Game/>

        <BottomLinks/>
      </div>

    </div>
    );

    // Add Score
    const addScoreEvent = (id) => {
      console.log('score added', id)
    }
  }
  
  export default App;
  