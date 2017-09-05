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
        return(Math.floor(Math.random() * max) + 1);
    };

    for (var count = 0; count < countVerbs; count++) {
        output = output.replace("[verb]", verbs[rand(verbs.length)]);
    }
    for (var count = 0; count < countNouns; count++) {
        output = output.replace("[noun]", nouns[rand(nouns.length)]);
    }
    for (var count = 0; count < countAdjectives; count++) {
        output = output.replace("[adjective]", adjectives[rand(adjectives.length)]);
    }

    console.log(output);

}());
