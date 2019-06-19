class DarkSkyObject{
    constructor(){

        this.handleDataReceived = this.handleDataReceived.bind(this);
        this.word = this.word.bind(this)
        this.speech = new Speech();
        this.button = $(".test-button");
        this.weatherInfo = {
            url: 'https://api.darksky.net/forecast/5f2668d63b042969dc1581b9d2250cee/33.684566,-117.826508?exclude=alerts,flags?units=auto',



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

        $.ajax(this.weatherInfo);
        this.button.on("click", this.word)
    }
        handleDataReceived(response) { //server response to the client
            
            var text = "It is currently " +response.currently.temperature+ "°F"
            var temperature = $('<div>').text(text);
            var currentSummary = $('<div>').text("Current summary: " +response.currently.summary);
            var minuteSummary = $('<div>').text("Minutely summary: " +response.minutely.summary);
            var hourSummary = $('<div>').text("Hourly summary: " +response.hourly.summary);
            var daySummary = $('<div>').text("Daily summary: " +response.daily.summary);
            $('body').append(temperature);
            $('body').append(currentSummary);
            $('body').append(minuteSummary);
            $('body').append(hourSummary);
            $('body').append(daySummary);
            this.data = response;
        }
    
        word(){
            
            var text = "It is currently " + this.data.currently.temperature+ "°F";
            var currentSummary = "Current summary: " +this.data.currently.summary;
            var minuteSummary = "Minutely summary: " +this.data.minutely.summary;
            var hourSummary = "Hourly summary: " +this.data.hourly.summary;
            var daySummary = "Daily summary: " +this.data.daily.summary;
            console.log('words: ', text, currentSummary, minuteSummary,hourSummary,daySummary);
            this.speech.speak(text+currentSummary+minuteSummary+hourSummary+daySummary);
        }
}

        $.ajax(weatherInfo);
    }

    quoteMethod(weather){
        var weatherQuoteInput = new Quote();
        weatherQuoteInput.weatherQuote(weather);
    }
}  

