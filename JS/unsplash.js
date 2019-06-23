class Unsplash { 
    constructor() {
        this.access_key1 = '0d15a099df4547010729e22ff9be78fd63cf407d0dd7841e29d5050953db21ed';
        this.getImageLoadScreen = this.getImageLoadScreen.bind(this);
    }
    getImageLoadScreen() {
        var searchUrl = `https://api.unsplash.com/search/photos/?query=nature&client_id=${this.access_key1}`;
        var ajaxUnsplashLoad = {
            datatype: 'json',
            url: searchUrl,
            method: 'GET',
            success: function ( response ) {
                var random = Math.floor(Math.random()* 10);
                var image = response['results'][random].urls.full;
                $('.modal-content').css({
                    'background-image': `url("${image}")`,
                    'background-attachment': 'fixed',
                    'background-repeat': 'no-repeat',
                    '-webkit-background-size': 'cover',
                    '-moz-background-size': 'cover',
                    '-o-background-size': 'cover',
                    'background-size': 'cover'
                });
            }
        }
        $.ajax(ajaxUnsplashLoad);
    }
    getImageWeather(searchParam){
        var searchUrl = `https://api.unsplash.com/search/photos/?query=${searchParam}&client_id=${this.access_key1}`;
        var ajaxUnsplashWeather = {
            datatype: 'json',
            url: searchUrl,
            method: 'GET',
            success: function ( response ) {
                var number = 0;
                console.log(response)
                debugger;
                var imageResults = response['results'];
                var key = 0;
                for (key in imageResults) {
                    if (imageResults[key]['sponsored'] === true) {
                        number = key;
                        key++;
                    } else if (imageResults[key]['sponsored'] === false) {
                        parseInt(key);
                        return number = key;
                    }
                }
                var image = response['results'][number].urls.full;
                $('#weather-section').css('background-image', `url("${image}")`);
            }
        }
        $.ajax(ajaxUnsplashWeather);
    }
}
