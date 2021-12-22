import Button from './reusable/Button';
import { HexColorPicker } from "react-colorful";

function Game({round, color, currentColor, setCurrentColor, nextRound}) {

    return (
        // <div className="text-white grid grid-cols-2 items-stretch p-10 mx-24 gap-4">
        <div className="text-white flex sm:flex-col lg:flex-row place-content-between p-10 mx-24 items-center space-x-10">
            <div className="p-2 grow color-picker">
                    <HexColorPicker color={currentColor} onChange={setCurrentColor}/>
            </div>
            <div className="bg-gradient-radial from-neutral-700 to-neutral-800 p-8 grow text-center rounded-3xl grid grid-cols-2 grid-rows-2 gap-6 shadow-stone-900 shadow-xl max-w-xl">
                <h1 className="text-8xl font-bold col-span-2 mb-0 leading-[1.3] slashed-zero">{color}</h1>
                <div className="w-full h-full rounded-lg row-span-2" style={{ backgroundColor: currentColor }}></div>
                <div>
                    <p className="py-4 text-lg tracking-wider">round {round} of 5</p>
                    <Button onClick={nextRound} label="Submit"/>
                </div>
            </div>
        </div>
        );
    }
    
    export default Game