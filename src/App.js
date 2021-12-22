import BottomLinks from './components/BottomLinks';
import NavBar from './components/NavBar';
import TopAlert from './components/TopAlert';
import Game from './components/Game';
import { useState } from 'react';
import GameOver from './components/GameOver';
// import Settings from './components/Settings';

function App() {

  var maxRounds = 5

  const [round, setRound] = useState(1)
  const [color, setColor] = useState(rgbToHex(getColor(), getColor(), getColor()).toUpperCase())
  const [currentColor, setCurrentColor] = useState("#aabbcc")
  const [guesses, setGuesses] = useState([])
  const [gameOver, setGameOver] = useState(false)
  //const [settings, showSettings] = useState(false)

  const nextRound = () => {

      if (round <= maxRounds) {

        var similarityScore = calculateDistance(currentColor, color)

        console.log("Round " + round + " SimilarityScore: " + similarityScore)
        console.log(guesses)
        console.log("GameOver: " + gameOver)

        setGuesses([...guesses, {similarityScore:similarityScore, currentColor:currentColor, goalColor:color, id:round} ])

        setRound(round + 1)
        setColor(rgbToHex(getColor(), getColor(), getColor()).toUpperCase())
        //console.log(rgbToHex(getColor(), getColor(), getColor()))
        //console.log("CurrentColorRGB: " + hexToRgb(currentColor))
        //console.log("GoalColorRGB: " + hexToRgb(color))

        // if (similarityScore < maxRounds) {
        //     console.log(" I think you're cheating");
        //   } else if (similarityScore < 50) {
        //         console.log("Perfect Choice")
        //   } else if (similarityScore < 100) {
        //         console.log("Very Close")
        //   } else if (similarityScore < 250) {
        //         console.log("Good enough")
        //   } else {
        //       console.log("It needs work")
        //   }
      }

      if (round === maxRounds) {
          //alert("Game Over")
          //setGameOver(true)
          console.log("condition checked")

          setGameOver(true)
          console.log(gameOver)
          //setRound(0)
          // setGuesses([])
      }
  }


  return (
    <div className="bg-neutral-900 min-h-screen">

      {/* {settings ? <Settings/> : null} */}

      
      <TopAlert />
      <div className="max-w-screen-xl mx-auto flex flex-col place-content-between min-h-screen my-[-4rem] pt-24">
        {/* <NavBar onClick={console.log("clicked")}/> */}
        <NavBar/>

        {/* <Game round={round} color={color} currentColor={currentColor} setCurrentColor={setCurrentColor} nextRound={nextRound}/>
        <GameOver roundCount={maxRounds} rounds={guesses}/> */}

      {gameOver ? <GameOver roundCount={maxRounds} rounds={guesses}/> : 
              <Game round={round} color={color} currentColor={currentColor} setCurrentColor={setCurrentColor} nextRound={nextRound}/>}


        <BottomLinks/>
      </div>

    </div>
    );
  }
  
export default App;

    
function getColor() {
return Math.floor(Math.random() * 255);
}

function hexToRgb(h) {
    //return['0x'+h[1]+h[2]|0,'0x'+h[3]+h[4]|0,'0x'+h[5]+h[6]|0]
    return['0x'+h[1]+h[2]|0,'0x'+h[3]+h[4]|0,'0x'+h[5]+h[6]|0]
}

function rgbToHex(r,g,b) {
    return"#"+((1<<24)+(r<<16)+(g<<8)+ b).toString(16).slice(1);
}

function calculateDistance(color1, color2) {

    var rgb1 = hexToRgb(color1).toString()
    //console.log("rgb1: " + rgb1)
    var rgb2 = hexToRgb(color2).toString()
    //console.log("rgb2: " + rgb2)

    var comma1color1 = rgb1.indexOf(',')
    var comma2color1 = rgb1.indexOf(',', comma1color1 + 1)

    var c1r = parseInt(rgb1.substring(0, comma1color1) , 10)
    var c1g = parseInt(rgb1.substring(comma1color1 + 1, comma2color1), 10)
    var c1b = parseInt(rgb1.substring(comma2color1 + 1), 10)

    //console.log("c1r:" + c1r + " c1g: " + c1g + " c1b: " + c1b)
    //console.log("c1r:" + rgb1.substring(0, comma1color1) + " c1g: " + rgb1.substring(comma1color1 + 1, comma2color1) + " c1b: " + rgb1.substring(comma2color1 + 1)   )

    var comma1color2 = rgb2.indexOf(",")
    var comma2color2 = rgb2.indexOf(",", comma1color2 + 1)

    var c2r = parseInt(rgb2.substring(0, comma1color2), 10)
    var c2g = parseInt(rgb2.substring(comma1color2 + 1, comma2color2), 10)
    var c2b = parseInt(rgb2.substring(comma2color2 + 1), 10)

    //console.log("c2g: " + rgb2.substring(comma1color2 + 1, comma2color2))
    //console.log("c2r: " + c2r + " c2g: " + c2g + " c2b: " + c2b)

    return Math.floor(Math.sqrt( Math.pow((c1r - c2r), 2) + Math.pow((c1g - c2g), 2) + Math.pow((c1b - c2b), 2)))
}


    
      
