Switch Statements
====================================

Múltiplos resultados possíveis
-----------------------------------

Pode substituir um padrão de comandos if e else para testar uma única expressão.

Síntaxe do comando Switch
----------------------------------

Um comando para tratar múltiplos casos possíveis para um único valor.

```js
var color = "blue";

switch (color) {
    case "blue":
        console.log("Blue is my favorite color");
        break;
    case "red":
        console.log("That's not as bad as green");
        break;
    default:
            console.log("You have bad taste");
}
```
```sh
"Blue is my favorite color"
```

Não esqueça o comando break
----------------------------------

Se um break está ausente, o comando switch vai executar o próximo case.

```js
var color = "blue";

switch (color) {
    case "blue": // todos os cases serão executados pois não há break
        console.log("Blue is my favorite color");
        //break;
    case "red":
        console.log("That's not as bad as green");
        //break;
    default:
            console.log("You have bad taste");
}
```
```sh
"Blue is my favorite color"
"That's not as bad as green"
"You have bad taste"
```

Uso seletivo de break
----------------------------------

As veses você quer mais de um caso.

```js
var compliment;
var adjectives = [];
var adjectiveCount = 3;

switch (adjectiveCount) {

    case 4:
        adjectives.push("exquisite");
    case 3:
        adjectives.push("fantastic");
    case 2:
        adjectives.push("amazing");
    default:
        adjectives.push("great");
}

compliment = "You have " + adjectives.join(", ") + " taste!";
console.log(compliment);
```
```sh
"You have fantastic, amazing, great taste!"
```
