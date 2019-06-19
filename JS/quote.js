class Quote {

    constructor(){
        $(".btn-success").on("click",this.randomQuote);
    }
    randomQuote(weatherCondition) {

        var ajaxRandomQuote = {
            url: "https://favqs.com/api/quotes/?filter="+weatherCondition,
            headers: {
                Authorization: 'Token token="8628443dc88e82625097a33570fd61cc"',

            },
            success: function( response ) {
                $("#createQuote").html("<p id='createQuote' class='lead text-center'>" +
                    response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");

                $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
                    ' (' + response.quoteAuthor + ')');
            }
         };
        $.ajax(ajaxRandomQuote);
    }

    weatherQuote(weatherCondition){
        for(var value in weatherCondition){

        }
    }r











}

