import colorwheel from './../images/radial-gradient.png';
import Button from './reusable/Button';
import { useState } from 'react';
// import ColorPicker from './reusable/ColorPicker';
import { HexColorPicker } from "react-colorful";

function Game() {

    const [round, setRound] = useState(1)
    const [color, setColor] = useState(rgbToHex(getColor(), getColor(), getColor()).toUpperCase())
    const [currentColor, setCurrentColor] = useState("#aabbcc");

    const nextRound = () => {
        if (round < 5) {
            setRound(round + 1)
            setColor(rgbToHex(getColor(), getColor(), getColor()).toUpperCase())
            //console.log(rgbToHex(getColor(), getColor(), getColor()))
            //console.log("CurrentColorRGB: " + hexToRgb(currentColor))
            //console.log("GoalColorRGB: " + hexToRgb(color))

            var similarity = calculateDistance(currentColor, color)
            if (similarity < 5) {
                console.log(" I think you're cheating");
              } else if (similarity < 50) {
                    console.log("Perfect Choice")
              } else if (similarity < 100) {
                    console.log("Very Close")
              } else if (similarity < 250) {
                    console.log("Good enough")
              } else {
                  console.log("It needs work")
              }
        }
        else {
            alert("Game Over")
            setRound(0)
        }
    }

    return (
        // <div className="text-white grid grid-cols-2 items-stretch p-10 mx-24 gap-4">
        <div className="text-white flex sm:flex-col lg:flex-row place-content-between p-10 mx-24 items-center">
            <div className="p-2 grow">
                {/* <img src={colorwheel} alt="ColorWheel" className=""></img> */}
                {/* <ColorPicker/> */}
                <HexColorPicker className="" color={currentColor} onChange={setCurrentColor} />
            </div>
            <div className="bg-gradient-radial from-neutral-700 to-neutral-800 p-8 grow text-center rounded-3xl grid grid-cols-2 grid-rows-2 gap-6 shadow-stone-900 shadow-xl">
                <h1 className="text-8xl font-bold col-span-2 mb-0 leading-[1.3]">{color}</h1>
                <div className="w-full h-full rounded-lg row-span-2" style={{ backgroundColor: currentColor }}></div>
                <div>
                    <p className="py-4 text-lg tracking-wider">round {round} of 5</p>

                    <button onClick={nextRound} className="py-4 px-16 text-neutral-900 bg-white rounded-lg text-xl hover:bg-pink-200 transition-all">Submit</button>
                    {/* <button onClick={() => setRound(count + 1)} className="py-4 px-16 text-neutral-900 bg-white rounded-lg text-xl hover:bg-pink-200 transition-all">Submit</button> */}
                    {/* <Button onClick={""}/> */}
                </div>
            </div>
        </div>
        );
    }
    
    export default Game;
    
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


    
      