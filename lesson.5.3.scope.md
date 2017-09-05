Escopo
=======================

Funções com comandos var
----------------------------------

Variáveis declaradas com var possuem escopo local.

```js
var word = "Hello";
var animals = ["cat", "dog", "bird"];

greeter(word, animals);

function greeter(str, arr) {
    var counter; // variável local, existe somente no escopo desta função, pois foi declarada com var
    for(counter = 0; counter < arr.length; counter++) {
        console.log(str + " " + arr[counter]);
    }
    console.log(counter);
}
console.log(counter); // counter não existe neste escopo
```
```sh
"Hello cat"
"Hello dog"
"Hello bird "
3
ReferenceError: counter is not defined
```

Comando var limita escopo
----------------------------------------

comandos var limitam variáveis ao escopo local.

```js
function example() {
    var local = "Only available inside example()";
    global = "Available anywhere once example() has been executed";
}

console.log(local); // não existe fora do escopo
console.log(global); // ainda não existe

example();

console.log(local); // não existe fora do escopo
console.log(global); // disponível em qualquer lugar, após a execução
```

Variáveis globais não são recomendadas, pois não sabemos em que ponto do programa a variável foi declarada, ela poderia estar ou não definida.

Escopo de variáveis é herdado de um modo
------------------------------------------

Funções herdam variáveis no escopo pai.

```js
var phrase = "Always available";

function example() {
    var local = "Only available inside example()";
    console.log(phrase);
    console.log(local);
}
example();

console.log(phrase);

console.log(local);
```
```sh
"Always available"
"Only available inside example()"
"Always available"
ReferenceError: local is not defined
```

Esteja seguro: Declare variáveis primeiro
-----------------------------------------

JavaScript elevará (hoist) a declarações de variáveis para o topo de um escopo.

Incie cada função ou script declarando quaisquer variáveis usadas. Isto faclita localizar as variáveis existentes.

```js
function predefined() {
    var before = 5;
    var after = 10;
    console.log(before + after);
}
function undefinedAfter() {
    var before = 5;
    console.log(before + after); // after foi elevado, mas não foi definido o seu valor, sendo undefined
    var after = 10;
}
function undeclaredAfter() {
    var before = 5;
    console.log(before + after);
}
predefined();
undefinedAfter();
undeclaredAfter();
```
```sh
15
NaN
ReferenceError: after is not defined
```

O escopo global
--------------------------------

Todos os scripts compartilham espaço em um objeto global. (window em navegadores, global no servidor)

```js
var count = 5;

console.log(count);

console.log(window.count);

window.count = 10;

console.log(count);
```
```sh
5
5
10
```

O que está errado com o escopo global?
--------------------------------------

Diferentes partes do código pode reusar um nome comum de variável (não importa quão cuidadoso você pensa que está sendo).

```js
var count = 5;

function thousands(price) {
    count = 1000 * price;
    return(count);
}

for (count = 0; count < 6; count++) {
    // do something
}

// a bunch of code

console.log(count);
```
```sh
6
```

Modos de isolar o escopo de variável
----------------------------------------

Mantenha variáveis locais fora do objeto global, ao:
* declará-las dentro de funções
* empacotar tudo dentro de um IIFE (Immediately invoked function expression)
* colocar dentro de objetos customizados que possuam métodos para encapsular

```js
// function
function thousands(price) {
    var count = 1000 * price;
}

// IIFE, mantem o código seguro do escopo global
(function() {
    var count;
    for (count = 0; count < 10; count++) {
        // do something
    }
}())

// Object
var myApp = {};
myApp.count = "Hello".length;

console.log(count); // count não está definida neste escopo

```
```sh
ReferenceError: count is not defined
```
