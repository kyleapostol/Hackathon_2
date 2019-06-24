class Quote {
// fix quote search parameter passing
// add imgur api to pass through
    constructor() {
        this.textToSpeech = this.textToSpeech.bind(this);
    }

    randomQuote(weather) {
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
                $('.quote-div').append(postQuote);
                $('.quote-author').append(postAuthor);

            },
         }
         $.ajax(ajaxRandomQuote);
    }
    textToSpeech() {
        var speech = new SpeechObject();
        $('#quoteButton').on('click', function(){
            speech.speak(quote);
        })
    }
}

            










