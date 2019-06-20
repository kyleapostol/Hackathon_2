class DarkSkyObject{
    constructor(){
        this.summary = null;
        this.getLocation = this.getLocation.bind(this);
        this.currentLocation = this.currentLocation.bind(this);
        this.quoteMethod = this.quoteMethod.bind(this);
        this.getYoutube = this.getYoutube.bind(this);
        this.quoteContainer = {};
    }
    getLocation() {
        console.log(navigator.geolocation); 
        if (Object.keys(navigator.geolocation).length) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                currentLocation(latitude, longitude);
            });
        } else {
            var errorMessage = "Geolocation is not supported by this browser. Please input your location manually (lon/lat):";
            var errorModal = $('<div>').addClass('error-modal');
            var modalContent = $('<div>').addClass('error-modal-content').css({
                'height': '200px',
                'width': '300px',
                'z-index': 1,
                'border': '2px black solid',
            })
            var inputLatitude = $('<input>').addClass('user-latitude').attr('placeholder', 'Latitude');
            var inputLongitude = $('<input>').addClass('user-longitude').attr('placeholder', 'Longitude');
            var modalButton = $('<button>').addClass('error-button').text('Submit');
            var modalText = errorMessage;
            modalContent.text(modalText);
            errorModal.append(modalContent);
            errorModal.append(inputLatitude);
            errorModal.append(inputLongitude);
            errorModal.append(modalButton);
            $('body').append(errorModal);
            modalButton.on('click', function() {
                if (inputLatitude && inputLongitude) {
                    errorModal.hide();
                    var latitude = parseFloat(inputLatitude.val());
                    var longitude = parseFloat(inputLongitude.val());
                    this.currentLocation(latitude, longitude);
                }
            }.bind(this));
        }
    }
    currentLocation(latitude, longitude) {
        var weatherInfo = {
            // url: 'https://api.darksky.net/forecast/5f2668d63b042969dc1581b9d2250cee/33.684566,-117.826508?exclude=alerts,flags?units=auto', //will need to get current location
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
} 

//clear-day, clear-night, rain, snow, sleet, wind, fog, cloudy, partly-cloudy-day, or partly-cloudy-night


