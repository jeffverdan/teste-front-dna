import styled from 'styled-components';


const Forms = styled.form`
  background-color: #fff;
  display: flex;
  position: fixed;
  flex-direction: column;
  z-index: 2;
  @media only screen and (min-width: 719px) {
    width: 60vw;
  }
  @media only screen and (max-width: 719px) {
    margin-left: 0px;
    min-width: 100vw;
    position: fixed;
  }
  min-height: 100vh;  
`;

export default Forms;
