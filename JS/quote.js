class Quote {

    constructor() {
        $(".btn-success").on("click", this.randomQuote);
    }
     randomQuote() {
        $.ajax
        ({
            url: "https://api.forismatic.com/api/1.0/?",
            dataType: "jsonp",
            data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
            success: function( response) {
                console.log('this is response: ', response);
                 var text = $("#createQuote").html("<p id='createQuote' class='lead text-center'>" +


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
                    console.log(text);
                $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
                    ' (' + response.quoteAuthor + ')');
                $('.btn-success').append(text);
            }
         };
        $.ajax(ajaxRandomQuote);
    }

    weatherQuote(weatherCondition){
        for(var value in weatherCondition){

        }
    }











}

