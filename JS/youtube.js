class Youtube {
    constructor() {
        this.ytData = this.ytData.bind(this);
    }
    ytData( searchParam ) {
        var apikey1 = 'AIzaSyBz2sreZUd7JjlXMM5YJRnZhDoNyM7FVXw';
        var apikey2 = 'AIzaSyC5hc6dc80OGUdjGx6wc018GoG6Gz49aaM';
        var apikey3 = 'AIzaSyC7dFK5shgH5UJfGJKmmIO66QVznXP5qRs';
        var basicSearchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${searchParam}&key=AIzaSyC5hc6dc80OGUdjGx6wc018GoG6Gz49aaM`;
        var ajaxYoutubeSearch = {  
            datatype: 'json',
            method: 'GET',
            url: basicSearchUrl,
            success: function( response ) {
                var videoId = response['items'][0]['id']['videoId'];
                this.renderVideo(videoId);
            }.bind(this),
            error: function( response ) { console.log(response)}
        }
        $.ajax(ajaxYoutubeSearch);
    }
    renderVideo( id ) {
        var newVideo = $('<iframe>').attr({
            src: `https://www.youtube.com/embed/${id}`,
            frameborder: 0,
            allow: `accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;`,
            height: '400px',
            width: '500px',
        })
        $('#video-player').append(newVideo);
    }
}