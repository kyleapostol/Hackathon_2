class DarkSkyObject{
    constructor(){
        this.summary = null;
        this.currentLocation = this.currentLocation.bind(this);
        this.quoteMethod = this.quoteMethod.bind(this);
        this.getYoutube = this.getYoutube.bind(this);
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
                $('#currentTemp').text(temperature);
                $('#weatherSummary').text(summary);
                this.getBackgroundImage(iconCurrently);
                this.quoteMethod(summary);
                this.getYoutube(iconCurrently);
            }.bind(this),
        }
        $.ajax(weatherInfo);
    }
    quoteMethod(weather){
        var weatherQuoteInput = new Quote();
        weatherQuoteInput.randomQuote(weather);
    }
    getYoutube(icon){
        var ytMusic = new Youtube();
        if (icon === 'clear-day') {
            ytMusic.ytData('happy music');
        } else if (icon === 'clear-night') {
            ytMusic.ytData('night drive music');
        } else if (icon === 'rain' || icon === 'cloudy' || icon === "fog") {
            ytMusic.ytData('heavy rain lofi');
        } else if (icon === 'snow') {
            ytMusic.ytData('christmas carols');
        } else {
            ytMusic.ytData('trending music');
        }
    }
    getBackgroundImage(searchQuery) {
        var unsplashImage = new Unsplash;
        unsplashImage.getImageMain(searchQuery);
    }
} 

//clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, or partly-cloudy-night


