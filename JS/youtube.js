class Youtube {
    constructor() {
        this.ytData = this.ytData.bind(this);
    }
    ytData( searchParam ) {
        var apikey1 = 'AIzaSyBz2sreZUd7JjlXMM5YJRnZhDoNyM7FVXw';
        var apikey2 = 'AIzaSyC5hc6dc80OGUdjGx6wc018GoG6Gz49aaM';
        var apikey3 = 'AIzaSyC7dFK5shgH5UJfGJKmmIO66QVznXP5qRs';
        var basicSearchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${searchParam}&key=${apikey2}`;
        var ajaxYoutubeSearch = {  
            datatype: 'json',
            method: 'GET',
            url: basicSearchUrl,
            success: function( response ) {
                for (var i = 1; i <= 3; i++) {
                    var videoId = response['items'][i]['id']['videoId'];
                    this.renderVideo(videoId, i);
                }
            }.bind(this),
            error: function( response ) { console.log(response)}
        }
        $.ajax(ajaxYoutubeSearch);
    }
    renderVideo( id, videoNumber ) {
        var newVideo = $('<iframe>').attr({
            src: `https://www.youtube.com/embed/${id}`,
            frameborder: 0,
            allow: `accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;`,
            height: '300px',
            width: '400px',
        })
        newVideo.addClass('.yt-iframe');
        $(`#video-player${videoNumber}`).append(newVideo);
    }
}