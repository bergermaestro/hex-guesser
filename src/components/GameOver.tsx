import Button from "./reusable/Button";

interface Guess {
  similarityScore: number;
  currentColor: string;
  goalColor: string;
  id: number;
}

interface GameOverProps {
  roundCount: number;
  rounds: Guess[];
  onRestart: () => void;
  gameOver?: boolean;
}

function GameOver({
  roundCount,
  rounds,
  onRestart,
  gameOver: _gameOver,
}: GameOverProps) {
  let totalScore = 0;
  // Fix: Include all rounds by using rounds.length instead of rounds.length - 1
  for (let i = 0; i < rounds.length; i++) {
    totalScore += rounds[i].similarityScore;
    console.log(rounds[i].similarityScore);
  }

  // Fix: Calculate maximum score based on actual number of rounds (each round max 100 points)
  const maxPossibleScore = roundCount * 100;
  const percentageScore = (totalScore / maxPossibleScore) * 100 + "%";
  console.log("Total Score: " + totalScore);
  console.log("Max Possible Score: " + maxPossibleScore);
  console.log("Percentage Score: " + percentageScore);

  return (
    // <div className="text-white grid grid-cols-2 items-stretch p-10 mx-24 gap-4">
    <div className="bg-radial from-neutral-700 to-neutral-800 text-center rounded-3xl shadow-stone-900 shadow-xl p-3 mx-24 text-white">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold col-span-2 mt-4 leading-[1.3] slashed-zero">
          Final Scores
        </h1>
        <div className="flex justify-evenly mt-2">
          <h2 className="text-left text-lg font-bold mx-8">actual color</h2>
          <p className="mx-10 text-lg opacity-0">Round x</p>
          <h2 className="text-right text-lg font-bold mx-8">your guess</h2>
        </div>
        {rounds.map((round) => (
          <div
            className="flex flex-row p-1 items-center justify-center"
            key={round.id}
          >
            <div
              className="h-8 w-64 rounded-md shadow-lg"
              style={{ backgroundColor: round.goalColor }}
            ></div>
            <span className="p-1 mx-10 text-lg">Round{round.id}</span>
            <div
              className="h-8 w-64 rounded-md shadow-lg"
              style={{ backgroundColor: round.currentColor }}
            ></div>
          </div>
        ))}

        <h2 className="text-lg pt-5 text-left">
          your final score: {totalScore}/{maxPossibleScore}
        </h2>
        {/* <h2>PercentageScore: {percentageScore}</h2> */}
        {/* <progress value="200" max="450" className="m-6 w-full" ></progress> */}
        <div className="h-4 w-full bg-black rounded-md mt-2 mb-4 shadow-lg">
          <div
            style={{ width: percentageScore }}
            className="h-full bg-pink-400 rounded-md"
          >
            {" "}
          </div>
        </div>
      </div>
      <Button onClick={onRestart} label="Play Again" />
    </div>
  );
}

export default GameOver;
