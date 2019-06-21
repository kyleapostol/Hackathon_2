class Quote {

    constructor() {
        // $(".btn-success").on("click", this.randomQuote);
    }

    randomQuote(weather) {
        var weather = null;
        switch (weather) {
            case 'cloudy-night':
                weather='cloudy';
            case 'partly-cloudy-day':
                weather='cloudy';
            case 'cloudy':
                weather='cloudy';
                break;
            case 'fog':
                weather='fog';
                break;
            case ' wind':
                weather="wind";
            case ' sleet':
                weather="wind";
            case 'snow':
                weather='snow';
                break;
            case 'rain':
                weather='rain';
                break;
            case 'clear-night':
                weather='night';
                break;
            case 'clear-day':
                weather='day';
                break;
            default:
                weather='happy';


        }
        var ajaxRandomQuote = {
            url: `https://favqs.com/api/quotes/?filter${weather}`,
            headers: {
                Authorization: 'Token token="8628443dc88e82625097a33570fd61cc"',

            },
            success: function( response ) {
                console.log(response);
                var postQuote = response['quotes'][0]['body'];
                var postAuthor = response['quotes'][0]["author"];
                $('.quoteDiv').append(postQuote);
                $('.quoteAuthor').append(postAuthor);
                // $("#createQuote").append("<p id='createQuote' class='lead text-center'>");
                    // response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");
                    // console.log(response.quoteText);
                // $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
                //     ' (' + response.quoteAuthor + ')');

            },
         }
         $.ajax(ajaxRandomQuote);

    }


}

            










