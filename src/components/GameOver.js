import Button from './reusable/Button';

function GameOver({roundCount, rounds, gameOver}) {

    var totalScore = 0;
    for (var i = 0; i < rounds.length - 1; i++) {
      totalScore += rounds[i].similarityScore
      console.log(rounds[i].similarityScore)
    }
    var percentageScore = ((totalScore / 1000) * 100) + "%"
    console.log("Total Score: " + totalScore)
    console.log("Percentage Score: " + percentageScore)
    
    return (
        // <div className="text-white grid grid-cols-2 items-stretch p-10 mx-24 gap-4">
        <div className="bg-gradient-radial from-neutral-700 to-neutral-800 text-center rounded-3xl shadow-stone-900 shadow-xl p-3 mx-24 text-white">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-5xl font-bold col-span-2 mt-4 leading-[1.3] slashed-zero">Final Scores</h1>
                <div className='flex justify-evenly mt-2'>
                    <h2 className='text-left text-lg font-bold mx-8'>actual color</h2>
                    <p className='mx-10 text-lg opacity-0'>Round x</p>
                    <h2 className='text-right text-lg font-bold mx-8'>your guess</h2>
                </div>
                {rounds.map((round) => (
                    <div className='flex flex-row p-1 items-center justify-center' key={round.id}>
                        <div className="h-8 w-64 rounded-md shadow-lg" style={{ backgroundColor: round.goalColor }}></div>
                        <span className="p-1 mx-10 text-lg">Round{round.id}</span>
                        <div className="h-8 w-64 rounded-md shadow-lg" style={{ backgroundColor: round.currentColor }}></div>
                    </div>))}

                <h2 className="text-lg pt-5 text-left">your final score: {totalScore}/1000</h2>
                {/* <h2>PercentageScore: {percentageScore}</h2> */}
                {/* <progress value="200" max="450" className="m-6 w-full" ></progress> */}
                <div className="h-4 w-full bg-black rounded-md mt-2 mb-4 shadow-lg">
                    <div style={{width: percentageScore}} className='h-full bg-pink-400 rounded-md'> </div>
                </div>
            </div>
            <Button onClick={() => window.location.reload()} label="Play Again"/>
        </div>
            );
        }
        
export default GameOver;