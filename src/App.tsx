import BottomLinks from "./components/BottomLinks";
import NavBar from "./components/NavBar";
import TopAlert from "./components/TopAlert";
import Game from "./components/Game";
import { useState } from "react";
import GameOver from "./components/GameOver";
import Settings from "./components/Settings";

// Type definitions
interface Guess {
  similarityScore: number;
  currentColor: string;
  goalColor: string;
  id: number;
}

function App() {
  // Settings state
  const [maxRounds, setMaxRounds] = useState<number>(5);
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);

  // Game state
  const [round, setRound] = useState<number>(1);
  const [color, setColor] = useState<string>(
    rgbToHex(getColor(), getColor(), getColor()).toUpperCase()
  );
  const [currentColor, setCurrentColor] = useState<string>("#aabbcc");
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const toggleSettings = () => {
    setSettingsOpen(!settingsOpen);
  };

  const handleMaxRoundsChange = (newMaxRounds: number) => {
    setMaxRounds(newMaxRounds);
    // If changing rounds mid-game, ask if they want to restart
    if (round > 1 && round <= maxRounds) {
      const shouldRestart = window.confirm(
        "Changing the number of rounds will restart your current game. Continue?"
      );
      if (shouldRestart) {
        restartGame();
      }
    }
  };

  const restartGame = () => {
    setRound(1);
    setColor(rgbToHex(getColor(), getColor(), getColor()).toUpperCase());
    setCurrentColor("#aabbcc");
    setGuesses([]);
    setGameOver(false);
  };

  const nextRound = (): void => {
    if (round <= maxRounds) {
      const distance = calculateDistance(currentColor, color);
      // Convert distance to score: closer colors get higher scores (0-100)
      // Maximum possible distance in RGB space is approximately 442 (from black to white)
      const maxDistance = 441;
      const similarityScore = Math.max(
        0,
        Math.round(((maxDistance - distance) / maxDistance) * 100)
      );

      console.log(guesses);
      console.log("GameOver: " + gameOver);

      setGuesses([
        ...guesses,
        {
          similarityScore: similarityScore,
          currentColor: currentColor,
          goalColor: color,
          id: round,
        },
      ]);

      setRound(round + 1);
      setColor(rgbToHex(getColor(), getColor(), getColor()).toUpperCase());
    }

    if (round === maxRounds) {
      console.log("condition checked");
      setGameOver(true);
      console.log(gameOver);
    }
  };

  return (
    <div className="bg-neutral-900 min-h-screen">
      <Settings
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        maxRounds={maxRounds}
        onMaxRoundsChange={handleMaxRoundsChange}
      />

      <TopAlert />
      <div className="max-w-screen-xl mx-auto flex flex-col place-content-between min-h-screen my-[-4rem] pt-24">
        <NavBar toggleSettings={toggleSettings} />

        {gameOver ? (
          <GameOver
            roundCount={maxRounds}
            rounds={guesses}
            onRestart={restartGame}
          />
        ) : (
          <Game
            round={round}
            color={color}
            currentColor={currentColor}
            setCurrentColor={setCurrentColor}
            nextRound={nextRound}
            maxRounds={maxRounds}
          />
        )}

        <BottomLinks />
      </div>
    </div>
  );
}

export default App;

// Utility functions with proper TypeScript types
function getColor(): number {
  return Math.floor(Math.random() * 255);
}

function hexToRgb(h: string): number[] {
  //return['0x'+h[1]+h[2]|0,'0x'+h[3]+h[4]|0,'0x'+h[5]+h[6]|0]
  return [
    parseInt("0x" + h[1] + h[2], 16),
    parseInt("0x" + h[3] + h[4], 16),
    parseInt("0x" + h[5] + h[6], 16),
  ];
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function calculateDistance(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1).toString();
  //console.log("rgb1: " + rgb1)
  const rgb2 = hexToRgb(color2).toString();
  //console.log("rgb2: " + rgb2)

  const comma1color1 = rgb1.indexOf(",");
  const comma2color1 = rgb1.indexOf(",", comma1color1 + 1);

  const c1r = parseInt(rgb1.substring(0, comma1color1), 10);
  const c1g = parseInt(rgb1.substring(comma1color1 + 1, comma2color1), 10);
  const c1b = parseInt(rgb1.substring(comma2color1 + 1), 10);

  //console.log("c1r:" + c1r + " c1g: " + c1g + " c1b: " + c1b)
  //console.log("c1r:" + rgb1.substring(0, comma1color1) + " c1g: " + rgb1.substring(comma1color1 + 1, comma2color1) + " c1b: " + rgb1.substring(comma2color1 + 1)   )

  const comma1color2 = rgb2.indexOf(",");
  const comma2color2 = rgb2.indexOf(",", comma1color2 + 1);

  const c2r = parseInt(rgb2.substring(0, comma1color2), 10);
  const c2g = parseInt(rgb2.substring(comma1color2 + 1, comma2color2), 10);
  const c2b = parseInt(rgb2.substring(comma2color2 + 1), 10);

  //console.log("c2g: " + rgb2.substring(comma1color2 + 1, comma2color2))
  //console.log("c2r: " + c2r + " c2g: " + c2g + " c2b: " + c2b)

  return Math.floor(
    Math.sqrt(
      Math.pow(c1r - c2r, 2) + Math.pow(c1g - c2g, 2) + Math.pow(c1b - c2b, 2)
    )
  );
}
