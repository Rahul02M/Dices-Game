import React, { useState } from 'react'
import styled from 'styled-components';

const RoleDice = ({roleDice ,CurrentDice}) => {
 
  return (
    <DiceContainer>
      <div className='Dice' onClick={roleDice}>
      <img src={`/img/dice_${CurrentDice}.png`} alt="dice 1" />
        <p>
          Click On Dice to roll
        </p>
      </div>
      
    
      </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items:  center;
  .Dice{
    cursor: pointer;          
  }
  p{
    font-size: 23.5px;
    align-items: center;
  }
  img{
    width: 90%;
  }
`;