import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;  
  @media only screen and (min-width: 719px) {
    margin-left: 65vw;
    margin-right: 40px;
    margin-top: 5vh;    
  }
  @media only screen and (max-width: 719px) {
    visibility: hidden;
  }
`;

export default Label;