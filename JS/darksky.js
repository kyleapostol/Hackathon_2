class DarkSkyObject{
    constructor(){
        // debugger;
        this.handleDataReceived = this.handleDataReceived.bind(this);
        this.getLocation = this.getLocation.bind(this);
        this.currentLocation = this.currentLocation.bind(this);
        this.getLocation();
    }
    handleDataReceived(response) {
        console.log("DarkSky response info!",response);
        var temperature = "The current temperature is "+response.currently.temperature;
        // var summary = response.currently.summary;
        // var summary = response.minutely.summary;
        var summary = response.hourly.summary;
        // var summary = response.daily.summary;
        $('#currentTemp').text(temperature);
        $('#weatherSummary').text(summary);
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.currentLocation);
          } else { 
            alert( "Geolocation is not supported by this browser." );
          }   
    }

    currentLocation(position) {
        // debugger;
        console.log('this: ', this);
        console.log('position:', position.coords.latitude);
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
}