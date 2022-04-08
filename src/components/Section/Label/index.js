import styled from "styled-components";

const Label = styled.label`
  display: flex;
  flex-direction: column;  
  align-items: right;
  margin: 20px 40px;
  margin-bottom: 40px;
  @media only screen and (max-width: 719px) {
    visibility: hidden;
  }
`;

export default Label;