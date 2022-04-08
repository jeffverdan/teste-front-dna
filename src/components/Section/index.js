import React from "react";
import logoWhite from "../../imagens/logoWhiteDNA.webp";
import Img from "./Img";
import Links from "./Links";
import Label from "./Label";


const Section = () => (
  <Label>
    <Links className="badge btn" href="">Contato</Links>

    <Img src={ logoWhite } alt="DNA Logo" />
  </Label>
)

export default Section;