import React from "react";

import Field from "./components/Field";
import Forms from "./components/Forms";
import Header from "./components/Header";
import Main from "./components/Main";
import Title from "./components/Title";

function App() {
  return (    
    <Main>
      <Forms>
      <Header.Logo />
        <Title>Vamos começar!</Title>
        <Field.Text label="Nome" type="text" name="name" placeholder={"Digite aqui seu nome completo"} />
        <Field.Text label="CPF" type="text" name="cpf" placeholder={"000.000.000-00"} />
        <Field.Text label="Data de Nascimento" type="text" name="dateNasc" placeholder={"dd/mm/aaaa"} />
        <Field.SelectComponent label="Gênero" name="genre" value1="Feminino" value2="Masculino" value3="Outro" />
        <Field.SelectComponent label="Estado Cívil" name="marriage" value1="Solteiro" value2="Casado" value3="Divorciado" value4="Viúvo" />
        <Field.Text label="Nome do Cônjuge" type="text" name="spouse" placeholder={"Digite aqui o nome completo"} />
        <Field.SelectComponent label="Quantos filhos?" name="sons" value1="0" value2="1" value3="2" value4="3 ou +" />
        <Field.ButtonComponent label="Enviar" type="button" />
      </Forms>
    </Main> 
  );
}

export default App;
