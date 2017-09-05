Funções como valores
==================================

Variáveis em JS podem ser tratadas como variáveis. E esta é uma das razões que JS é considerada uma linguagem funcional.

Funções no escopo global
----------------------------------

Quando você declara uma função, você a adiciona ao escopo global. Da mesma forma que uma variável se você declara fora de algum outro escopo.

```js
function greeter(str, arr) { // qualquer função declarada fora de um escopo, vive no contexto global
    var counter;
    for(counter = 0; counter < arr.length; counter++) {
        console.log(str + " " + arr[counter]);
    }
}

console.log(greeter);

console.log(window.greeter);

window.greeter("Hello" ["Fred", "Judy"]);
```
```sh
ƒ greeter(str, arr) {
    var counter;
    for(counter = 0; counter < arr.length; counter++) {
        console.log(str + " " + arr[counter]);
    }
}
ƒ greeter(str, arr) {
    var counter;
    for(counter = 0; counter < arr.length; counter++) {
        console.log(str + " " + arr[counter]);
    }
}
"Hello Fred"
"Hello Judy"
```

Protegendo o escopo global
-------------------------------------

Todos os truques para proteger o escopo global de variáveis se aplicam as funções.

```js
// IIFE, expressão de função imediatamente invocada
(function() {
    function greeter(str, arr) {
        var counter;
        for(counter = 0; counter < arr.length; counter++) {
            console.log(str + " " + arr[counter]);
        }
    }

    greeter("Hello", ["Fred", "Judy"]);

}()/*esses parentese após a declaração da função é responsável por invocar a função imediatamente*/);

console.log(window.greeter); // a função está fora do escopo global
```
```sh
"Hello Fred"
"Hello Judy"
undefined
```

Funções declaradas em funções
--------------------------------

Uma função pode declarar funções locais, com seu próprio escopo local.

```js
// IIFE, expressão de função imediatamente invocada
(function() {

    function greeter(str, arr) {
        var counter;
        var phrase;
        for(counter = 0; counter < arr.length; counter++) {
            phrase = str + " " + arr[counter];
            console.log(shout(phrase));
        }

        function shout(str) {
            return str.toUpperCase() + "!";
        }
    }

    greeter("Hello", ["Fred", "Judy"]);

    shout("world"); // shout não existe neste escopo. ele pertence ao escopo local da função greeter()
}());

```
```sh
"HELLO FRED!"
"HELLO JUDY!"
ReferenceError: shout is not defined
```

Passando funções para funções
-------------------------------------

Uma função pode tomar uma função anônima, declarada em linha com ou sem nome, como um argumento.

```js
// IIFE, expressão de função imediatamente invocada
(function() {

    function greeter(str, arr, display) {
        var counter;
        var phrase;
        for(counter = 0; counter < arr.length; counter++) {
            phrase = str + " " + arr[counter];
            console.log(display(phrase));
        }
    }

    greeter("Hello", ["Fred", "Judy"], function(str) { return str; });

    greeter("Hello", ["Fred", "Judy"], function(str) { return str.toUpperCase() + "!!!"; });

}());
```
```sh
"Hello Fred"
"Hello Judy"
"HELLO FRED!!!"
"HELLO JUDY!!!"
```

usar funções anônimas inline é muito comum em JS dirigido a eventos, um exemplo são os callbacks.

Atribuindo funções a variáveis
-------------------------------------

Uma função anônima pode ser atribuida a uma variável, justamente como qualquer outro valor.

```js
(function() {

    // uma variável que recebe uma função anônima inline
    var greeter = function(str, arr) {
        var counter;
        var phrase;
        for(counter = 0; counter < arr.length; counter++) {
            phrase = str + " " + arr[counter];
            console.log(phrase);
        }
    }; // como é uma declaração de variável, é necessário o ponto e virgula aqui

    greeter("Hello", ["Fred", "Judy"]);

}());
```
```sh
"Hello Fred"
"Hello Judy"
```

Passando funções como variáveis
-----------------------------------------

Você pode passar uma função para outra função como uma variável, para código mais modular, mais limpo.

```js
// IIFE, expressão de função imediatamente invocada
(function() {

    function greeter(str, arr, display) {
        var counter;
        var phrase;
        for(counter = 0; counter < arr.length; counter++) {
            phrase = str + " " + arr[counter];
            console.log(display(phrase));
        }
    }

    var say = function(str) {
        return str;
    };

    var shout = function(str) {
        return str.toUpperCase() + "!!!";
    };

    greeter("Hello", ["Fred", "Judy"], say);

    greeter("Hello", ["Fred", "Judy"], shout);


}());
```
```sh
"Hello Fred"
"Hello Judy"
```

Poder definir funções como estas pode ser bastante convenientes, podendo ser utilizadas em diferentes contextos. Criar pequenas funções atribuidas a variáveis, permite criar código que é bastante reutilizável
