$("document").ready(function() { //this helps your jQuery to work. Write all of your JS code in this function.
    var word;
    var pig = "ay";
    var output;



    $(".translate").on('click', function() {
        word = $(this).parent().children('.input').text();
        //bottom_under this i had to look up
        if (word.length > 0 && word.match(/^[a-zA-Z][a-zA-Z]+$/) !== null) {
            var vowels = ["a", "e", "i", "o", "u"];
            var vo = word.slice(0, 1);
            var con = word.slice(1);

            if (vo === vowels) {
                output = word + pig;
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
