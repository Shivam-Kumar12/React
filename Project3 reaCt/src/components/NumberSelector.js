// import { useState } from 'react'
import styled from 'styled-components'

const NumberSelector = ({ error, setError, selectedNumber, setselectedNumber }) => {
    const arrNumber = [1, 2, 3, 4, 5, 6]

    const numberSelectorHandler = (value) => {
        setselectedNumber(value);
        setError("")
    }
    console.log(selectedNumber);

    return (
        <NumberSelectorContainer>
            <p className='error'>{error}</p>
            <div className='container'>
                {
                    arrNumber.map((value, i) => (
                        <Box
                            isSelected={
                                value === selectedNumber
                            }
                            key={i} onClick={() => numberSelectorHandler(value)}>

                            {value}</Box>
                    ))
                }
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column; 
align-items: end  ;

.container{
display: flex;
gap: 24px;

}
p{
    font-size: 20px;
    font-weight: 500;
    text-decoration: underline;
}
.error{
    color: red;

}
`




const Box = styled.div`
width:62px;
height: 62px;
border: 1px solid black;
border-radius: 50%;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 800;
cursor: pointer;

background-color: ${(props => (props.isSelected ? "black" : "white"))};
color:${(props => (!props.isSelected ? "black" : "white"))} ;
`
