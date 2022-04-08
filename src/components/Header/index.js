import React from "react";
import logoColor from "../../imagens/logoColorDNA.png";
import Img from "./Img";
import Label from "./Label";


const Logo = () => (
  <Label>
    <Img src={ logoColor } />    
  </Label>
)

const Header = {
  Logo,
};

export default Header;