Argumentos de funções
===============================

Passando argumentos para funções
-----------------------------------

Variáveis para ser usada por uma função podem ser passadas como argumentos entre parenteses.

```js
var color = "red";

showItem(color);

function showItem(item) {
    console.log(item);
}
```
```sh
"red"
```

Passando múltiplos argumentos nomeados
----------------------------------------------

Argumentos podem ser de qualquer tipo. Refira a eles pelo nome de parâmetro definidos na função.

```js
var word = "Hello";
var animals = ["cat", "dog", "bird"];

greeter(word, animals);

function greeter(str, arr) {
    var counter;
    for(counter = 0; counter < arr.length; counter++) {
        console.log(str + " " + arr[counter]);
    }
}
```
```sh
"Hello cat"
"Hello dog"
"Hello bird "
```

Projeto e nome para reuso
------------------------------------

Funções deveriam ser:
* Flexíveis
* Reusáveis
* Independentes

Nomeie funções para suportar aplicações flexíveis.

```js
var word = "Hello";
var animals = ["cat", "dog", "bird"];
var salutation = "Goodbye";
var target = ["sun", "moon"];

greeter(word, animals);
greeter(salutation, target);
greeter(word, target);

function greeter(str, arr) {
    var counter;
    for(counter = 0; counter < arr.length; counter++) {
        console.log(str + " " + arr[counter]);
    }
}
```
```sh
"Hello cat"
"Hello dog"
"Hello bird "
"Goodbye sun"
"Goodbye moon"
"Hello sun"
"Hello moon"
```

Funções podem chamar funções
----------------------------------------

Chame suas próprias funções como faria com nativas.

```js
var testString = "hello world";
console.log(titleCase(testString));

console.log(titleCase("this is a title"));

function titleCase(str) {
    var strArray = str.split(" ");
    var counter;
    for (counter = 0; counter < strArray.length; counter++) {
        strArray[counter] = capitalize(strArray[counter]);
    }
    return(strArray.join(" "));
}

function capitalize(str) {
    var result = [];
    result[0] = str.charAt(0).toUpperCase();
    result[1] = str.substring(1);
    return(result.join(""));
}
```
```sh
"Hello World"
"This Is A Title"
```
