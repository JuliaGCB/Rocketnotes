# Anotações

COmandos 
npm run dev -- iniciar a aplicação
npm create vite@lastest -- colocar o vite na aplicação
npm init -y --
npm install -- coloca a pasta node modules
npm install styled-components -- colocar o styled-components na aplicação
npm install react-icons --save -- Colocar os icones do react

npm install 
npm install react-router-dom -- instala o react router para criar as rotas
npm install axios : uma biblioteca para trabalhar com requisições http

>>>>>> Coisas básicas<<<<<<
Para importar algum arquivo ou função usar 
export function (nome da function)(){

}
e no Arquivo que eu for usar, colocar {} no nome 
import {Nome da function} from './'

Usar sem o default é para usar o mesmo nome da function em todos os arquivos (Melhor)


>>>>>>> Styled Components <<<<<<<<<
Usando js para dar estilização na pagina
CSS com js

Para fazer uma estilização precisamos colocar como uma const 


>>>>>>>> ARROW function <<<<<<<<<<

Não tem nome e tbm não tem o function

passa direto para o const

const result = (7,3) =>{
    result a+b;
}
Como ela não tem nome
É uma função que será executada ali, aquele lugar

body{
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    Estou desestruturando o theme e chamando de theme a cor do background é que 800
    Então estou executando essa função apenas aqui
}
Eu poderia como assim 
${( props ) => props.theme.COLORS.BACKGROUND_800}; // Estou acessando as propriedades e pegando o theme
${({theme}) => theme.COLORS.BACKGROUND_800} // Estou desestruturando o props e pegando direto o theme. 
Quando eu colo o { theme } eu estou pulando o props e indo direto para o theme

>>>>> Propriedade Children <<<<<<<<<
Não se passa como uma propriedade normal
e pode ser mudada em outras paginas

>>>> isActive <<<<<<<
è para saber se aquela coisa está ativa ou não e é uma boolean (true/false)

icon: Icon usando para fazer uma conversão nos paramentos para o icon poder ser um componente com Icon


>>>>> MAP <<<<<<
usado para percerrer uma lista
item po item


>>>>>>> NoteItem <<<<<<

readOnly={!isNew} fica apenas para leitura
para bloquar quando não for uma coisa nova


>>>>> Contexto <<<<<<
è para fazer uma autenticação dos usuarios e a pagina que ira mostrar para os usuarios
se tiver autenticado mostrar a pagina home e as demais paginas
se não mostar o login

O contexto vai guardar as minhas rotas de auth.routes.js e app.routes.js
e eu compartilho esse contexto com as o <Routes/> para que todas as rotas tenham acesso ao contexto


>>>>> Hooks <<<<<<
useState => criar e acessar estados
    > useState
        um hook que cria um estado
e o 
useEffect => disparar uma logica toda vez que a interface for redenrizada // vincular um estado 

sempre o antes do nome do hook colocar o use
useNomeDoHook  => camelCase

