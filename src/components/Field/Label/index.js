import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-left: 9vw;
  @media only screen and (max-width: 719px) { 
    margin-left: 0px;
    align-items: center;
  }
`;

export default Label;