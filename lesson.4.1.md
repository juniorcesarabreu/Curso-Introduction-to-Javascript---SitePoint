Bloco de comandos
========================

O que é um comando (statement)?
----------------------------------------

Um conjunto de instruções que diz ao computador como executar uma ação.

* Geralmente começa com uma palavra-chave ou variável
* Sempre termina com ponto e vírgula
* Executado sequencialmente (na maior parte)
* Pode ser agrupados em um bloco com chaves

Porque agrupar comandos?
-----------------------------------------

Programas as vezes precisam fazer o mesmo conjunto de passos repetidas vezes

```js
var colors = ["red", "green", "blue"];
var question = "Do you like the color " + colors[0] + "?";
console.log(question);

var question = "Do you like the color " + colors[1] + "?";
console.log(question);

var question = "Do you like the color " + colors[2] + "?";
console.log(question);
```
```sh
"Do you like the color red?"
"Do you like the color green?"
"Do you like the color blue?"
```

No exemplo houve muita repetição, e suposto haver um jeito de evitar essa repetição, pois computadores são justamente para fazerem tarefas repetidas.

Blocos de comandos para iteração
-------------------------------------

* Agrupe comandos para ser repetidos em blocos.
* Use comandos de fluxo de controle para executá-los.

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

locos de comandos para condições
------------------------------------

* Executa somente um bloco se uma condição é verdadeira

```js
var colors = ["red", "green", "blue"];
var selection = 0;

console.log("You chose " + colors[selection]);
// "You chose red"

// PSEUDO-CÓDIGO (Não é JS Real)
IF THE SELECTION IS RED {
    console.log("Just like Red Rising Hood");
} OTHERWISE, IF THE SELECTION IS GREEN {
    console.log("Just like Peter Pan");
} OTHERWISE, IF THE SELECTION IS BLUE {
    console.log("Just like Little Boy Blue");
} OTHERWISE {
    console.log("That's nice");
}
```

Controle de Fluxo e Iteração
------------------------------------

Algumas palavras -chaves que dirão ao JavaScript para executar um bloco de comandos são:
+ if (controle de fluxo baseado em um Boolean)
+ for (itera sobre elementos em um array)
+ switch (controle de fluxo baseado em um valor)
+ while (itera baseado em um Boolean)
