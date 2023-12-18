import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
      <h2>
        How to play dice game
      </h2>
      <div className='text'>
        <p>-Select any number</p>
        <p>-Click on dice image</p>
        <p>-After click on dice if selected number is equal to dice number you will get same point as dice </p>
        <p>-If you get wrong guess than 2 point will be dedcuted</p>
      </div>
    
     </RulesContainer>
  )
}

export default Rules

const RulesContainer =styled.div`
max-width: 750px;
margin: 0 auto;
background-color: #8080805a;
padding: 5px 10px;
border-radius: 10px;
h2{
  font-size: 24px;
  text-align: center;
}
.text {
  margin-top: 8px;
}
`;