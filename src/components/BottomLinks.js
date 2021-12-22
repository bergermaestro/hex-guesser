import { GiReceiveMoney} from "react-icons/gi";
import { BsGithub, BsTwitter, BsLinkedin} from "react-icons/bs";

function BottomLinks() {
    return (
        <div className="text-neutral-200 px-32 py-2 flex flex-col place-content-between lg:flex-row">
            <ul className="flex flex-col lg:flex-row space-x-10">
                <li><a className="flex flex-row space-x-2 items-center hover:text-pink-300 transition-all" href="https://twitter.com/itsmattberger" target="_blank" rel="noreferrer"> <BsTwitter/> <span>Twitter</span></a></li>
                <li><a className="flex flex-row space-x-2 items-center hover:text-pink-300 transition-all" href="https://github.com/bergermaestro" target="_blank" rel="noreferrer"> <BsGithub/> <span>Github</span></a></li>
                <li><a className="flex flex-row space-x-2 items-center hover:text-pink-300 transition-all" href="https://www.linkedin.com/in/matthewaberger/" target="_blank" rel="noreferrer"> <BsLinkedin/> <span>LinkedIn</span></a></li>
                <li><a className="flex flex-row space-x-2 items-center hover:text-pink-300 transition-all" href="." target="_blank" rel="noreferrer"> <GiReceiveMoney/> <span>Donate</span></a></li>
            </ul>
            <p>© 2021 Matthew Berger</p>
        </div>
      );
    }
    
    export default BottomLinks;
    