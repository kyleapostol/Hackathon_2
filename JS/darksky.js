class DarkSkyObject{
    constructor(){
        this.weatherInfo = {
            url: 'https://api.darksky.net/forecast/5f2668d63b042969dc1581b9d2250cee/33.684566,-117.826508?exclude=alerts,flags?units=auto',
            method: 'get',
            dataType: 'jsonp',
            success: this.handleDataReceived, 
        }
        $.ajax(this.weatherInfo);
        this.handleDataReceived = this.handleDataReceived.bind(this);
    }
    handleDataReceived(response) { //server response to the client
        console.log(response);
        var temperature = $('<div>').text("It is currently " +response.currently.temperature+ "°F");
        var currentSummary = $('<div>').text("Current summary: " +response.currently.summary);
        var minuteSummary = $('<div>').text("Minutely summary: " +response.minutely.summary);
        var hourSummary = $('<div>').text("Hourly summary: " +response.hourly.summary);
        var daySummary = $('<div>').text("Daily summary: " +response.daily.summary);
        $('body').append(temperature);
        $('body').append(currentSummary);
        $('body').append(minuteSummary);
        $('body').append(hourSummary);
        $('body').append(daySummary);
    }
}
