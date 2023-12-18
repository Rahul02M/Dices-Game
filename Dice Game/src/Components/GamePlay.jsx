import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { Button, OutlineButton } from '../styled/Button';
import Rules from './Rules'


const GamePlay = () => {
 
  const [score, setscore] = useState(0);
  const [selectedNumber, setselectedNumber] = useState();
  const [CurrentDice, setCurrentDice] = useState(1);
  const [error, seterror] = useState("");
  const [showRules, setshowRules] = useState(false);

  const  generateRandomNumber = ( min,max)=>{
    return  Math.floor(Math.random()*(max-min) + min );
  }

  const roleDice=() =>{
    if (!selectedNumber) {
      seterror(" You have not selected any number");
      return
    }
   

    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prav)=> randomNumber);

  

    if (selectedNumber == randomNumber){
      setscore((prev) => prev + randomNumber + " Win");
    } else {
    setscore ((prev)  => prev -2);
    }

    setselectedNumber (undefined);
  };

  const  resetscore =() => {
    setscore(0);
  }

  return (
  <MainContainer>
 <div className='topSection'>
    < TotalScore score={score}/>
    <NumberSelector
    error={error}
    seterror={seterror}
    selectedNumber={selectedNumber}
    setselectedNumber={setselectedNumber}
    />
 </div>
    < RoleDice CurrentDice={CurrentDice}roleDice={roleDice}
    />
   <div className='btns'>
    <OutlineButton
    onClick={resetscore}
    >Reset Score </OutlineButton>
    <Button
    onClick={()=> setshowRules (prev =>!prev)}
    >
      {showRules ? "Hide " :"Show "}
        Rules </Button>
   </div>

     {showRules && <Rules/>}
  </MainContainer>
  )
}

export default GamePlay;


const MainContainer = styled.main`
padding-top:10px;
 .topSection {
  display: flex;
  justify-content: space-around;
  align-items:  end;
 }
 .btns{
  margin-top: 8px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  margin-right: 17px;
  gap: 12px;
 }
`;

 