import styled  from "styled-components";

 export const Button=styled.button`
display: flex;
color: white;
justify-content: center;
padding: 10px 18px; 
background:black;
border-radius: 5px;
width: 200px;
font-size: 15px;
margin-left: 300px;
border: 1px solid transparent;
transition: 0.4s background ease-in ;
cursor: pointer;

&:hover{
  background-color: white;
  border: 1px solid black;
  color: black ;
  transition: 0.3s background ease-in ;
}

`
;
export const OutlineButton=styled(Button)`
border: 1px solid black ;
background-color: white;
color: black;


&:hover{
  background-color: black;
  border: 1px solid transparent;
  color: white;
  
}

`
;
