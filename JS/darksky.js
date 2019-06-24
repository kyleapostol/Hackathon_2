class DarkSkyObject{
    constructor(){
        this.summary = null;
        this.currentLocation = this.currentLocation.bind(this);
        this.quoteMethod = this.quoteMethod.bind(this);
        this.getYoutube = this.getYoutube.bind(this);
        this.ytMusic = new Youtube();
        this.weatherImage = new Unsplash();
        this.quoteContainer = {};
        this.getSkycons = this.getSkycons.bind(this);
    }
   
    currentLocation(latitude, longitude) {
        var weatherInfo = {
            url: 'https://api.darksky.net/forecast/5f2668d63b042969dc1581b9d2250cee/'+latitude+','+longitude+'?exclude=alerts,flags?units=auto',
            method: 'get',
            dataType: 'jsonp',
            success: function( response ) {
                var temperature = "The current temperature is "+response.currently.temperature + "°";
                var summary = response.hourly.summary;
                var iconCurrently = response.currently.icon;
                var wholeContext = temperature + 'with' + summary;
                var speech = new Speech();
                $('.weather-button').on('click', function(){
                    speech.speak(wholeContext);
                }.bind(this))
                $('#current-temp').text(temperature);
                $('#weather-summary').text(summary);
                this.weatherImage.getImageWeather(iconCurrently);
                this.quoteMethod(summary);
                this.getYoutube(iconCurrently);
                this.getSkycons(iconCurrently);

            }.bind(this),
            error: function( response ){ console.log(response);}
        }
        $.ajax(weatherInfo);
    }
    getSkycons(icon) {
        var skycons = new Skycons({'color': "white"});
        var iconArray = [
            Skycons.CLEAR_DAY, // [0]
            Skycons.CLEAR_NIGHT, // [1]
            Skycons.PARTLY_CLOUDY_DAY, // [2]
            Skycons.PARTLY_CLOUDY_NIGHT, // [3]
            Skycons.CLOUDY, // [4]
            Skycons.RAIN, // [5]
            Skycons.SLEET, // [6]
            Skycons.SNOW, // [7]
            Skycons.WIND, // [8]
            Skycons.FOG // [9]
        ];
        switch (icon) {
            case "clear-day":
                skycons.set("skycons",iconArray[0]);
                break;
            case "clear-night":
                skycons.set("skycons",iconArray[1]);
                break;
            case "partly-cloudy-day":
                skycons.set("skycons",iconArray[2]);
                break;
            case "partly-cloudy-night":
                skycons.set("skycons",iconArray[3]);
                break;
            case "cloudy":
                skycons.set("skycons",iconArray[4]);
                break;
            case "rain":
                skycons.set("skycons",iconArray[5]);
                break;
            case "sleet":
                skycons.set("skycons",iconArray[6]);
                break;
            case "snow":
                skycons.set("skycons",iconArray[7]);
                break;
            case "wind":
                skycons.set("skycons",iconArray[8]);
                break;
            case "fog":
                skycons.set("skycons",iconArray[9]);
                break;
        }
        skycons.play();
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


