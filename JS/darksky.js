class DarkSkyObject{
    constructor(){
        this.summary = null;
        this.currentLocation = this.currentLocation.bind(this);
        this.quoteMethod = this.quoteMethod.bind(this);
        this.getYoutube = this.getYoutube.bind(this);
        this.ytMusic = new Youtube();
        this.weatherImage = new Unsplash();
        this.quoteContainer = {};
    }
   
    currentLocation(latitude, longitude) {
        var weatherInfo = {
            url: 'https://api.darksky.net/forecast/5f2668d63b042969dc1581b9d2250cee/'+latitude+','+longitude+'?exclude=alerts,flags?units=auto',
            method: 'get',
            dataType: 'jsonp',
            success: function( response ) {
                console.log("DarkSky response info!",response);
                var temperature = "The current temperature is "+response.currently.temperature;
                var summary = response.hourly.summary;
                var iconCurrently = response.currently.icon;
                var wholeContext = temperature + 'with' + summary;
                $('.weather-button').on('click', function(){
                    this.speech.speak(wholeContext);
                }.bind(this))
                $('#current-temp').text(temperature);
                $('#weather-summary').text(summary);
                this.weatherImage.getImageWeather(iconCurrently);
                this.quoteMethod(summary);
                this.getYoutube(iconCurrently);
            }.bind(this),
            error: function( response ){ console.log(response);}
        }
        $.ajax(weatherInfo);
    }
    quoteMethod(weather){
        var weatherQuoteInput = new Quote();
        weatherQuoteInput.randomQuote(weather);
    }
    getYoutube(icon){
        var musicSearch = null;
        if (icon === 'clear-day') {
            musicSearch = 'happy music';
        } else if (icon === 'clear-night') {
            musicSearch = 'night drive music';
        } else if (icon === 'rain' || icon === 'cloudy' || icon === "fog") {
            musicSearch = 'heavy rain lofi';
        } else if (icon === 'snow') {
            musicSearch = 'christmas carols';
        } else {
            musicSearch = 'trending music';
        }
        this.ytMusic.ytData(musicSearch);
    }
} 

//clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, or partly-cloudy-night


