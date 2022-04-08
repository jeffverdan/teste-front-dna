import styled from "styled-components";

const Button = styled.button`
  font-size: 14px;
  width: 40vw;
  margin-top: 20px;
  height: 30px;
  background-color: #5EA99B;
  border: 1px solid #2C7D6E;
  color: #fff;  
  @media only screen and (max-width: 719px) { 
    width: 70vw;
  }
`;

export default Button;