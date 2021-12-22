import logo from "../images/logo.svg";

function NavBar({toggleSettings}) {
  return (
      <div className="text-white flex flex-row px-32 py-4 place-content-between">
        <a href="." className="flex items-center space-x-4">
          <img src={logo} alt="eyedropper logo"></img>
          <h1 className="text-4xl font-bold"> HexGuess </h1>
        </a>

          <ul className="flex flex-row px-4 space-x-6 py-2 items-center">
            {/* <li>leaderboard</li> */}
            <li><button onClick={toggleSettings}>settings</button></li>
          </ul>
      </div>
    );
  }
  
  export default NavBar;
  