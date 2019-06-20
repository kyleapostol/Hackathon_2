class DarkSkyObject{
    constructor(){


        this.summary = null;
        this.handleDataReceived = this.handleDataReceived.bind(this);
        this.getLocation = this.getLocation.bind(this);
        this.currentLocation = this.currentLocation.bind(this);


        this.quoteMethod = this.quoteMethod.bind(this);
        var weatherQuote = new Quote;
        weatherQuote.quoteMethod;
        this.quoteContainer = {};

        this.getLocation();


    }
    handleDataReceived(response) {
        console.log("DarkSky response info!",response);
        this.temperature = "The current temperature is "+response.currently.temperature;
        this.summary = response.hourly.summary;
        $('#currentTemp').text(this.temperature);
        $('#weatherSummary').text(this.summary);
        this.quoteMethod(this.summary);
    }
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.currentLocation);
        } else {
            alert( "Geolocation is not supported by this browser." );
        }
    }
    currentLocation(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var weatherInfo = {
            // url: 'https://api.darksky.net/forecast/5f2668d63b042969dc1581b9d2250cee/33.684566,-117.826508?exclude=alerts,flags?units=auto', //will need to get current location
            url: 'https://api.darksky.net/forecast/5f2668d63b042969dc1581b9d2250cee/'+latitude+','+longitude+'?exclude=alerts,flags?units=auto',
            method: 'get',
            dataType: 'jsonp',
            success: this.handleDataReceived,
        }
        $.ajax(weatherInfo);
    }

    quoteMethod(weather){
        var weatherQuoteInput = new Quote();
        weatherQuoteInput.randomQuote(weather);
    }
}  