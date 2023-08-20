import styled from 'styled-components'
import NumberSelector from './NumberSelector'
import TotalScore from './TotalScore'
import RollDice from './RollDice'
import { Button, OutlineButton } from "../styled/Button";
import { useState } from 'react'
import Rules from './Rules';

const GamePlay = () => {
    const [selectedNumber, setselectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [score, setScore] = useState(0);
    const [error, setError] = useState("");
    const[rules,setRules]=useState(true); 
 

    const generateRandomNumber = (min, max) => {
        console.log(Math.floor(Math.random() * (max - min) + min));
        return Math.floor(Math.random() * (max - min) + min);
    }

    const rollDice = () => {
        if (!selectedNumber) {
            setError("You have not selected any Number");
            return;
        }
        setError("");
        const RandomNumber = generateRandomNumber(1, 7);

        setCurrentDice((prev) => RandomNumber);
        console.log(RandomNumber);

        if (selectedNumber === RandomNumber) {
            setScore((prev) => prev + RandomNumber);
        }
        else {
            setScore((prev) => prev - 2)
        }

        setselectedNumber(undefined)
    }
    const resetScore = () =>{
        setScore(0);
    }




    return (
        <MainContainer>
            <div className='top_Section'>
                <TotalScore score={score} />
                <NumberSelector
                    error={error}
                    setError={setError}
                    selectedNumber={selectedNumber}
                    setselectedNumber={setselectedNumber}
                />
            </div>
            <RollDice currentDice={currentDice}
                rollDice={rollDice}
            />
            <div className="btns">
                <OutlineButton onClick={resetScore }>Reset Score</OutlineButton><br></br>
                <Button onClick={() => setRules(prev => !prev )}>{
                    rules ? "Hide " : "Show "}
                Rules</Button>
            </div>


            {rules && <Rules />}
        </MainContainer >



    )
}

export default GamePlay

const MainContainer = styled.div`

.top_Section{
    display: flex;
    justify-content: space-around;
    align-items:end;
    height: 32vh;
}
.btns{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      max-width: 220px;
      margin-left: 490px;
      margin-right: auto;
    }
`