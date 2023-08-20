import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h2>How to Play dice Game?</h2>
<div className="text">
  <ol>
  <li><p>Select any Number</p></li>
  <li><p>Click On The Dice Image</p></li>
  <li><p>After click on dice if selected number is equal to dice number you will get same point as  dice otherwise Your points will be deducted</p></li>
  <li>FOR CODE VISIT THIS LINK👇</li>
  <a href=""></a>
  
  
  </ol>

        </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer =styled.div`
max-width: 800px;
margin: 0 auto;
margin-top: 20px;
background-color: #FbF1F1;
padding: 20px;
border-radius: 10px;
h2{
    font-size: 24px;
    font-weight: bold;
}
.text{
    margin-top: 24px;
}
`
