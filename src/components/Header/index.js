import React from "react";
import logoColor from "../../imagens/logoColorDNA.png";
import Img from "./Img";
import Links from "./Links";
import Label from "./Label";


const Logo = () => (
  <Label>
    <Img src={ logoColor } />
    <Links className="badge btn" href="">Contato</Links>
  </Label>
)

const Header = {
  Logo,
};

export default Header;