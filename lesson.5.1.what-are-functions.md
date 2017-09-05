O que são funções?
===============================

Chamando um bloco de código
-------------------------------

* Loops de iteração sobre blocos de código.
* Controle de fluxo ramifica para blocos de código.
* Mas o que fazer se você quer apenas chamar um bloco de código?

Nomeando um bloco de código
----------------------------------

Ao dar um nome para um bloco de código, você pode chamá-lo sempre que você quiser; é como criar uma nova palavra-chave apenas para o seu código.

```js
function sayHi () {
    console.log("Hi");
}

sayHi();
```
```sh
"Hi"
```

Declarando e usando funções
---------------------------------

* Podem ser definidas antes ou após o código que as usem.

* Podem usar e alterar variáveis que existam quando a função foi definida... Então seja cuidadoso!

```js
var color;

console.log(color);
changeColor();
console.log(color);
changeColor();
console.log(color);
changeColor();
console.log(color);

function changeColor() {
    switch (color) {
        case "red":
            color = "blue";
            break;
        case "green":
            color = "red";
            break;
        default:
            color = "green";
    }
}
```
```sh
undefined
"green"
"red"
"blue"
```

Quando o JS executa, a primeira coisa que ele faz é analisar todo o código disponível e encontrar as funções presentes.
As funções tem acesso as variáveis que existem fora de seu próprio contexto.

O resultado de chamar uma função
---------------------------------

Sem parentese, o código da função é retornado.

Com parenteses, a função é executada.

O valor de retorno de uma função é undefined a menos que seja especificado

```js
var color;

console.log(changeColor); // retorna o código da função
console.log(changeColor()); // retorna o resultado da função, se não definido é undefined
console.log(color);

function changeColor() {
    switch (color) {
        case "red":
            color = "blue";
            break;
        case "green":
            color = "red";
            break;
        default:
            color = "green";
    }
}
```
```js
function changeColor() {
switch (color) {
    case "red":
        color = "blue";
        break;
    .case "green":
        color = "red";
        break;
    default:
        color = "green";
}
}
undefined
"green"
```

Especificando um valor de retorno
----------------------------------

Somente um valor de retorno para cada execução.

Deve retornar um valor ou o resultado será indefinido (undefined).

```js
var color;

console.log(changeColor()); // imprime o retorno da função
console.log(color); // imprime valor de color
changeColor(); // a função retorna um valor, que não é usado, nem exibido no console
console.log(color);

function changeColor() {
    switch (color) {
        case "red":
            color = "blue";
            break;
        case "green":
            color = "red";
            break;
        default:
            color = "green";
    }
    return color;
}

```
```sh
"green"
"green"
"red"
```

Return termina a execução
-------------------------------

Somente um valor de retorno por execução.

Comando return termina a execução. Semelhante como break pode ser usado para quebrar a execução de um loop.

```js
var color;

console.log(color);
color = changeColor();
console.log(color);
color = changeColor();
console.log(color);

function changeColor() {
    switch (color) {
        case "red":
            return "blue";
        case "green":
            return "red";
        default:
            return "green";
    }
    console.log("This will never be shown"); // Nunca será executado
}

```
```sh
undefined
"green"
"red"
```
