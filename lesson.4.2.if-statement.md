Comando If
===============================

Condições booleanas
------------------------------

Testar o estado booleano de um expressão para decidir se executa um bloco de código.

```js
var color = "blue";

console.log("You chose " + color);

if (color == "blue") {
    console.log("Blue is my favorite color");
}
```
```sh
"You chose blue"
"Blue is my favorite color"
```

Palavras-chaves If e Else
-----------------------------

O que fazer se a condição é falsa

```js
var color = "green";

console.log("You chose " + color);

if (color == "blue") {
    console.log("Blue is my favorite color");
} else {
    console.log("You have bad taste");
}
```
```sh
"You chose green"
"You have bad taste"
```

Múltiplas condições Else
---------------------------------

Ramifica para diferentes blocos baseado eu uma única variável

```js
var color = "red";

console.log("You chose " + color);

if (color == "blue") {
    console.log("Blue is my favorite color");
} else if (color == "red") {
    console.log("That's not as bad as green");
} else {
    console.log("You have bad taste");
}
```
```sh
"You chose red"
"That's not as bad as green"
```
