import React from "react";
import { useForm  } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

import TestCPF from "./components/utils/TestCPF"
import Field from "./components/Field";
import Forms from "./components/Forms";
import Header from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";
import Title from "./components/Title";


const MARRIAGE_MSG = "Selecione um estado civil";
const SONS_MSG = "Selecione a quantidade de filhos";

//Validação de campos utilizando YUP https://www.npmjs.com/package/yup#api
const schema = yup.object({
  name: yup.string().required("O nome é obrigatório"),
  cpf: yup.string().test('cpf', 'CPF Inválido', (cpfNumber) => TestCPF(cpfNumber)).required(),
  dateNasc: yup.string().required("A data de nascimento é obrigatória"),
  marriage: yup.string().required(MARRIAGE_MSG).notOneOf([MARRIAGE_MSG], MARRIAGE_MSG),
  spouse: yup.string().when("marriage", {is: "Casado", then: yup.string().required("O nome do cônjuge é obrigatório")}),
  sons: yup.string().required(SONS_MSG).notOneOf([SONS_MSG], SONS_MSG),
})

function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  
  // Assiste os values em tempo real (Ativei para habilitar campo "conjuge")
  const watchAllFields = watch();
  
  // Enviar os dados para o backend
  const sendData = (data) => {
    console.log(data);
  };

  return (    
    <Main>
      <Forms onSubmit={ handleSubmit(sendData) }>
        <Header.Logo />
        <Title>Vamos começar!</Title>

        {/* Campo Nome completo */}
        <Field.Text 
          label="Nome" 
          type="text" 
          name="name" 
          placeholder={"Digite aqui seu nome completo"} 
          register={ register } 
        />
        { errors.name && <p>{ errors.name.message }</p> }
        

        {/* Campo CPF */}
        <Field.Text 
          label="CPF" 
          type="text" 
          name="cpf" 
          placeholder={"000.000.000-00"} 
          register={ register } 
        />
        { errors.cpf && <p>{ errors.cpf.message }</p> }

        {/* Campo data de nascimento */}
        <Field.Text 
          label="Data de Nascimento" 
          type="text" name="dateNasc" 
          placeholder={"dd/mm/aaaa"} 
          register={ register }           
        />
        { errors.dateNasc && <p>{ errors.dateNasc.message }</p> }

        {/* Campo Genero */}
        <Field.SelectComponent 
          label="Gênero" 
          name="genre" 
          value1="Prefiro não informar"
          value2="Mulher Cisgênero" 
          value3="Homem Cisgênero" 
          value4="Mulher Trans" 
          value5="Homem Trans"           
        />

        {/* Campo estado civil */}
        <Field.SelectComponent 
          label="Estado Cívil" 
          name="marriage" 
          value1="Selecione um estado civil"
          value2="Solteiro" 
          value3="Casado" 
          value4="Divorciado" 
          value5="Viúvo" 
          onChange={ (e) => {console.log(e)} }
          { ...register("marriage") } 
        />
        { errors.marriage && <p>{ errors.marriage.message }</p> }

        
        {/* Campo Nome do Conjuge */}
        { watchAllFields.marriage === "Casado" && (
          <>
            <Field.Text 
              label="Nome do Cônjuge" 
              type="text" name="spouse" 
              placeholder={"Digite aqui o nome completo"} 
              register={ register } 
            />
            { errors.spouse && <p>{ errors.spouse.message }</p> }
          </>
        )}

        {/* Campo filhos */}
        <Field.SelectComponent 
          label="Quantos filhos?" 
          name="sons" 
          value1="Selecione a quantidade de filhos"
          value2="0" 
          value3="1" 
          value4="2" 
          value5="3 ou +" 
          { ...register("sons") } 
        />
        { errors.sons && <p>{ errors.sons.message }</p> }

        <Field.ButtonComponent label="Enviar" type="submit" />
      </Forms>
      <Section />      
    </Main> 
  );
}

export default App;
