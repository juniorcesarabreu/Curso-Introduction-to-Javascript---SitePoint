Word Puzzle
==============================

Crie um programa que monta uma história a partir de um template com palavras faltantes.

Insira as palavras faltantes dentro do template de uma coleção de substantivos, adjetivos e verbos.

Exemplo
---------------------------------

Template: I like to [verb]. My favorite [noun] is [adjective] [noun]. That's what makes me [adjective].

Words:
* verbs: ski
* nouns: hat, tractor
* adjectives: gooey, purple

Output: I like to ski. My favorite hat is gooey tractor. That's what makes me purple.

Bonus 1: Random Output
------------------------------

Esta função rand retornará um número inteiro randômico, de um a qualquer número inteiro máximo passado para ele.

```js
var rand = function(max) {
    return(Math.floor(Math.random() * max) + 1)
};

console.log(rand(5));
// 2 (talvez)
console.log(rand(5));
// 1 (talvez)
// etc.
```

Usar esta função, randomiza a ordem em que seu script insere as palavras, assim a saída é única cada vez que você executa.

Bonus 2: Não repita palavras
-----------------------------------

Palavras estão sendo repetidas em nosso exemplo. Descubra um modo de evitar a mesma palavra de ser usada duas vezes na mesma saída.

Considere o que acontece se faltam palavras. Você pode evitar que seu programa quebre?

Bonus 3: Entrada real do usuário
----------------------------------------

Aqui está como as funções prompt() e alert() funcionam em um navegador. (Eles podem parecer diferente em diferentes navegadores.)

```js
var input = prompt("What is your name?");
// Irá exibir um prompt no navegador
// e atribuirá a input o valor inserido
alert("Hello " + input);
// Saudará seu usuário no navegador
```

Use uma série de prompts para coletar tantos nouns, adjectives e verbs que você precisa para seu template.

Use um alert para exibir sua saída de história finbal após você ter coletado a última palavra do usuário.
