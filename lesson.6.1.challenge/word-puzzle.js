(function() {

    var verbs = ["ski"];
    var nouns = ["hat", "tractor"];
    var adjectives = ["gooey", "purple"];
    var countVerbs = 0;
    var countNouns = 0;
    var countAdjectives = 0;

    var template = "I like to [verb]. My favorite [noun] is [adjective] [noun]. That's what makes me [adjective].";

    var output = template;

    countVerbs = template.split("[verb]").length;
    countNouns = template.split("[noun]").length;
    countAdjectives = template.split("[adjective]").length;

    for (var count = 0; count < countVerbs; count++) {
        output = output.replace("[verb]", verbs[count]);
    }
    for (var count = 0; count < countNouns; count++) {
        output = output.replace("[noun]", nouns[count]);
    }
    for (var count = 0; count < countAdjectives; count++) {
        output = output.replace("[adjective]", adjectives[count]);
    }

    console.log(output);

}());
