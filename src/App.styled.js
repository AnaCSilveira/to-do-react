import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledDiv = styled.div`
  background: #f1c39b;
  min-height: 100vh;
`;

export const StyledH1 = styled.h1`
  font-size: 50px;
  font-weight: bold;
  width: 20%;
  padding: 2%;
`;

export const StyledTask = styled.div`
  background: #feffff;
  border-radius: 8px;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70vh;
  margin: 0 auto;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
`;
export const StyledH2 = styled.h2`
  font-size: 30px;
  margin-top: 20px;
`;

export const Styledbutton = styled.button`
  background: #3a8686;
  border-radius: 0 5px 5px 0;
  height: 30px;
  color: #feffff;
  border: none;
`;

export const StyledInput = styled.input`
  height: 27px;
  border-radius: 5px 0 0 5px;
  width: 300px;
  border: 1px solid #e0e3e6;
  align-content: center;
`;

export const StyledUl = styled.ul`
width:75%;
display:flex;
flex-direction:column;
margin-top: 10px;
`
export const StyledIconTrash = styled(FontAwesomeIcon)`
position: fixed;
right: 610px;
color:#33446b;
`