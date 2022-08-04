# Resumo do Projeto

Chegou a hora de pegar todo o conhecimento adquirido nos módulos anteriores e aplicar em um projeto real!

Construímos um projeto que se integra com a API desenvolvida no Módulo 4 utilizando um Client HTTP que construímos do zero utilizando a fetch API do próprio JavaScript.

Além disso, trabalhamos com validação de formulários, controlled e uncontrolled components, Modais, Portais, entramos à fundo no que é CORS, tratamentos de erros do JavaScript e da API, analisamos o código fonte do React para entender o funcionamento dos Hooks, abordamos patterns como Service e EventEmitter, dicas de UI/UX e prevenção de Memory Leaks, animações e muito mais!

E claro: usando apenas os pacotes necessários, aqui fazemos tudo na mão!

# Project Summary

It's time to take all the knowledge acquired in the previous modules and apply it to a real project!

We built a project that integrates with the API developed in Module 4 using an HTTP Client that we built from scratch using the JavaScript fetch API itself.

In addition, we work with form validation, controlled and uncontrolled components, Modals, Portals, we go deep into what CORS is, JavaScript and API error handling, we analyze the React source code to understand how Hooks work, we address patterns like Service and EventEmitter, UI/UX tips and memory leak prevention, animations and much more!

And of course: using only the necessary packages, here we do everything by hand!



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Anotações

Module Controlled Components

React é One Way Data Binding
Only sing of truth


React and React DOM must know what any of them are doing
That why we use useState

Module Uncontrolled Components
The page does not render again after update a variable

We gonna use the useRef Hook. It can be used something to store information between rendering.
And, make possible to get the value of the element without rendering the component again




### Entendendo a fetch API

The fetch function only falls to catch on the (then and catch), if the connection isn't estabileshed with the url passed

### Same Origin Policy (SOP)
É uma ferramenta de segurança
Basicamente é o sistema fazendo uma chamada para uma URL de mesma origem
protocolo://dominio:porta

Exemplo:
Saída: http://localhost:3000
Destino: http://localhost:3001

CORS existe para flexibilizar O SOP. Permitindo ser feito o fetch para origens diferentes.


### Simple vs Preflighted requests
https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request

Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.

Grande maioria dos Headers tem prefixo de Access-Control

Simple requests - One of the allowed methods:
GET
HEAD
POST

### Cacheando resultado do Preflight
Access-Control-Max-Age -> coloca o tempo que vai cachear os headers


### Fazendo o parse do body da response




### Trabalhando com async/await dentro do useEffect
Quando usar o then e catch - ou quando usar async await

Caso sua Promise, na parte debaixo, não dependa do código que vai ser executado,
não existe muitos motivos do porquê usar um async await.

Não usar o useEffect com async. Motivos:
1. Race condition


useEffect - função de cleanup é executado quando componente é desmontado.



### Melhoria de UX com status de loading
Usar o ao setar states como de Loadings e afins, para evitar ter a renderização a mais.
Qualquer dúvida, rever a aula.

Fetch API só cai no catch, caso tenha problema em conectar com o servidor.
