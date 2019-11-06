$("document").ready(function() {
    var word;
    var punc = [".", "?", "!", ",", "\"", "'", " "];
    var pig = "ay";
    var output;



    $(".translate").on('click', function() {
        var vowels = ["a", "e", "i", "o", "u"];
        word = $('.input').text();

        //bottom_under this i had to look up
        if (isvow(word)) {

            var vo = word.slice(0, 1);
            var con = word.slice(1);

            if (vo === vowels) {
                output = word;
                $(".answer").text(output);
            }

            else {
                output = con + vo + pig;
                $(".answer").text(output);
            }
        }

        else {
            $(".answer").text("nope!");
        }

    });




});
function isvow(word) {
    let first = word.charAt(0);
    let vowels = ["a", "e", "i", "o", "u"];

    for (let i = 0; i < 5; i++) {
        if (first === vowels[i]) {
            console.log("hi");
            word.slice(0, 1);
            return true;
        } else {

        }
    }return false;
}