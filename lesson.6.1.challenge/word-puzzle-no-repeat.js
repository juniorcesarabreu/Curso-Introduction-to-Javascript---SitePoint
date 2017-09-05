(function() {

    var verbs = ["ski", "eat", "drive"];
    var nouns = ["hat", "tractor", "box", "robot"];
    var adjectives = ["gooey", "purple", "strong", "bored"];
    var countVerbs = 0;
    var countNouns = 0;
    var countAdjectives = 0;

    var template = "I like to [verb]. My favorite [noun] is [adjective] [noun]. That's what makes me [adjective].";

    var output = template;

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

    console.log(output);

}());
