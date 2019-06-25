class Maps {
    constructor() {
    }
    handleMaps( address ) {
        var searchUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyC7dFK5shgH5UJfGJKmmIO66QVznXP5qRs`;
        var ajaxFindLocation = {
            datatype: 'json',
            method: 'GET',
            url: searchUrl,
            success: function( response ) {
                var latitude = response['results'][0]['geometry']['location']['lat'];
                var longitude = response['results'][0]['geometry']['location']['lng'];
                var darkSky = new DarkSkyObject();
                darkSky.currentLocation(latitude, longitude);
            }.bind(this),
            error: function( response ) { console.log( response )}
        }
        $.ajax(ajaxFindLocation);
    }
}