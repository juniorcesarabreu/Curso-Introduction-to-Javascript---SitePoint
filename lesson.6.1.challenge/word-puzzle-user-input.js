(function() {

    var verbs = [];
    var nouns = [];
    var adjectives = [];
    var countVerbs = 0;
    var countNouns = 0;
    var countAdjectives = 0;

    var template = "I like to [verb]. My favorite [noun] is [adjective] [noun]. That's what makes me [adjective].";

    var output = template;

    do {
        var verb = prompt("Insert a verb (leave blank to cancel): ");

        if (verb) {
            verbs.push(verb);
        } else {
            break;
        }

    } while (true);

    do {
        var noun = prompt("Insert a noun (leave blank to cancel): ");

        if (noun) {
            nouns.push(noun);
        } else {
            break;
        }

    } while (true);

    do {
        var adjective = prompt("Insert a adjective (leave blank to cancel): ");

        if (adjective) {
            adjectives.push(adjective);
        } else {
            break;
        }

    } while (true);


    countVerbs = template.split("[verb]").length;
    countNouns = template.split("[noun]").length;
    countAdjectives = template.split("[adjective]").length;

    var rand = function(max) {
        return (Math.floor(Math.random() * max));
    };
    var randNumber;

    for (var count = 0; count < countVerbs; count++) {

        do {
            randNumber = rand(verbs.length);
        } while (verbs[randNumber] === null);

        output = output.replace("[verb]", verbs[randNumber]);
        verbs[randNumber] = null;

    }
    for (var count = 0; count < countNouns; count++) {

        do {
            randNumber = rand(nouns.length);
        } while (nouns[randNumber] === null);

        output = output.replace("[noun]", nouns[randNumber]);
        nouns[randNumber] = null;
    }
    for (var count = 0; count < countAdjectives; count++) {

        do {
            randNumber = rand(adjectives.length);
        } while (adjectives[randNumber] === null);

        output = output.replace("[adjective]", adjectives[randNumber]);
        adjectives[randNumber] = null;
    }

    alert(output);

}());
