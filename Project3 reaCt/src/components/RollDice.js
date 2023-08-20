// import { useState } from 'react'
import styled from 'styled-components'

const RollDice = ({currentDice,rollDice}) => {



  return (
    <DiceContainer>
    <div className='image' onClick={rollDice}>
      <img src={`images/dice_${currentDice}.png   ` }></img>
    
    <p>Click on the Dice Roll</p>
 
    </div>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer =styled.div`
.image{
    margin-top: 48px;
    align-items: center;
    display:flex ;
    flex-direction: column;
    cursor: pointer;
} 
p{    
     display:flex ;
    align-items: center;
    justify-content: center;
}


`
