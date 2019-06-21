class Unsplash { 
    constructor() {
        this.access_key1 = '0d15a099df4547010729e22ff9be78fd63cf407d0dd7841e29d5050953db21ed';
        this.getImageLoadScreen = this.getImageLoadScreen.bind(this);
        this.getImageMain = this.getImageMain.bind(this);
        this.renderImage = this.renderImage.bind(this);
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
    getImageMain( searchParam ){
        var searchUrl = `https://api.unsplash.com/search/photos/?query=${searchParam}&client_id=${this.access_key1}`;
        var ajaxUnsplashImage = {
            datatype: 'json',
            url: searchUrl,
            method: 'GET',
            success: function ( response ) {
                var searchLength = Object.keys(response['results']).length;
                var random = Math.floor(Math.random() * (searchLength));
                var imageUrl = response['results'][random].urls.full;
                this.renderImage(imageUrl);
            }.bind(this),
            error: function(response) { console.log(response)}
        }
        $.ajax(ajaxUnsplashImage);
    }
    renderImage( url ) {
        $('body').css({
            'background-image': `url("${url}");`,
            'background-attachment': 'fixed',
            'background-repeat': 'no-repeat'
        })
    }

}
