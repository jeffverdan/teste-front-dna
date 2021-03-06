import styled from 'styled-components';


const Main = styled.main`
  display: flex;
  align-items: right;
  z-index: 1;
  position: relative;  
  @media only screen and (min-width: 719px) { 
    background-image: linear-gradient(#5EA99B, #2C7D6E)
  }
  min-height: 100vh;
  min-width: 100vw;
`;

export default Main;
