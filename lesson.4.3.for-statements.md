Comando For
============================

Pseudo-código para Iteração
------------------------------------

* Agrupar comandos para ser repetidos em blocos.
* Usar comandos de controle de fluxo para executá-los.

```js
var colors = ["red", "green", "blue"];
var question;

// PSEUDO-CÓDIGO (Não é JS Real)
FOR EACH COLOR IN COLORS {
    question = "Do you like " + colors[THE CURRENT COLOR] + "?";
    console.log(question);
    // "Do you like the color red?" (primeira vez)
    // "Do you like the color green?" (segunda vez)
    // "Do you like the color blue?" (terceira vez)
}
```

Iteração de laço For
----------------------------

Quatro elementos de um comando for:
* Condição inicial
* Condição final
* Iterador
* Bloco de código

```js
var colors = ["red", "green", "blue"];
var question;
var counter;

for (counter = 0; counter < colors.length; counter++) {
    console.log("Do you like " + colors[counter] + "?");
}
```
```sh
"Do you like red?"
"Do you like green?"
"Do you like blue?"
```

Condições inciais
------------------------------

Declare quaisquer variáveis primeiro, e lembre-se de não usar o mesmo iterador em outro loop for

Condições finais
--------------------------

Como o loop sabe que quando foi concluído?

Iteração
----------------------------

O que muda durante cada loop para mover o processo adiante?

Expressões em loop For são opcionais
------------------------------------

A condição inicial, a condição final, a iteração, e até mesmo o bloco de código a executar são todos opcionais.

Saia de um loop For
-----------------------------------

Use um comando de break para interromper o loop antes da condição final

```js
var count = 0;

for(;;) {
    console.log("This could go on forever");
    if (counter++ > 10) {
        break;
    }
}
```
```sh
"This could go on forever"
"This could go on forever"
"This could go on forever"
"This could go on forever"
"This could go on forever"
"This could go on forever"
"This could go on forever"
"This could go on forever"
"This could go on forever"
"This could go on forever"
```
