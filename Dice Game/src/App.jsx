
import { useState } from "react";
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";


function App() {

 const [IsGameStarted, setIsGameStarted] = useState(false)

 const toggleGamePlay =() =>{
  setIsGameStarted((prev) => !prev);
 };

  return (
    <>
    {IsGameStarted ? <GamePlay/> : <StartGame toogle={toggleGamePlay}/>}

      
    </>
  )
}

export default App
