import React, { useState } from 'react'
import styled from 'styled-components'


const NumberSelector = (
  {  seterror ,error ,selectedNumber, setselectedNumber}
) => {
const arrNumber=[1,2,3,4,5,6,];

const numberSelectorHandler =(value) => {
  setselectedNumber(value);
  seterror("");
}

  return (
    <NumSelectorContainer>
      <p className='error'>{error}</p>
         <div className='Numbers'>
         {arrNumber.map((value,i) =>(
          <Box
          isSelected={value === selectedNumber}
          key={i} onClick={()=>numberSelectorHandler(value)}>
            {value}
          </Box>
        ) )}
         </div>

         <p>Select a Number</p>
    </NumSelectorContainer>
  )
}
 

export default NumberSelector;

const NumSelectorContainer = styled.div`

display: flex;
flex-direction: column;
align-items: end;
.Numbers{
  display:flex;
  gap: 24px;
}
p{
  font-size: 24px;
  font-weight: 700px;
}
.error{
  color: red;
}

 `;

const Box= styled.div`
 height: 52px;
 width: 52px;
 border: 1px solid black;
 display: grid;
 place-items: center;
 font-size: 24px;
 font-weight: 700;
 background-color:${(props)=>(props.isSelected ? "black":"white ")} ;
 color:${(props)=>(!props.isSelected ? "black":"white ")} ;

`;
