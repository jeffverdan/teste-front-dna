# O que foi desenvolvido
Teste de habilidades em React, para empresa DNA Imóveis.

 - [x] Página com um Formulário
 - [x] Campos obrigatórios (nome completo, cpf, data de nascimento, estado civil, nome do cônjuge, quantidade de filhos)
 - [x] Data de Nascimento dd/mm/aaaa
 - [x] Validação de CPF
 - [x] Campo Conjuge habilitado apenas se selecionado aopção "Casado"
 - [x] Campo Tem filhos e se for maior que 0, foi mesclado a Quantidade de filhos? de 0 a 3 ou +.
 - [x] Biblioteca utilizada React

## Prints do projeto
Link para vizualização https://jeffverdan.github.io/teste-front-dna/ (não necessita instalação)
<img src="https://github.com/jeffverdan/teste-front-dna/blob/main/public/images/demonstra%C3%A7%C3%A3o.png" width="900"/>

## Instruções para executar o projeto

1. Clone o repositório
  * `git clone git@github.com:jeffverdan/teste-front-dna.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd test-front-dna`

2. Instale as dependências e inicialize o projeto
  * Instale as dependências:
    * `npm install`
  * Inicialize o projeto:
    * `npm start` (uma nova página http://localhost:3000/ deve abrir no seu navegador)

# Documentação

O projeto fui desenvolvido utilizando biblioteca `ReactJs`, linguagem `javaScript`, e de estilização `CSS` + `Bootstrap`.

Também utilizei de:
* Styled-Components https://styled-components.com/ - Facilita a alteração e remoção de estilos e componentes.
* Hooks costumizados como `useForm` (documentação disponivel no <a href="https://react-hook-form.com/api/useform"> Link </a> )
* Para validação dos campos do forms, utlizei `YUP` (documentação no <a href="https://github.com/jquense/yup"> Link </a> )
* Para validação do CPF em particular, encontrei a solução no forum da Ages (<a href="https://tools.ages.pucrs.br/calculadora/calculadora-front/-/commit/2e918d3ee0321a556112c3b25767d3e0a511b872?w=1"> Link </a> ), postada pelo usuário Guilherme Sbroglio Rizzotto.
Achei essa parte do CPF interessante pois ele valida o primeiro digito do CPF multiplicando cada digito (do 1º ao 9º) começando por 10 e diminuindo gradativamente até 2 e vai acumulando o total das multiplicações. Depois pega-se 11 e subtrai-se o resto do acumulado dividido por 11. Se o resultado for maior que 9 o primeiro digito verificador é 0 senão é o próprio resultado.
