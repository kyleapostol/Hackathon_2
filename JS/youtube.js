class Youtube {
    constructor() {
        this.ytData = this.ytData.bind(this);
    }
    ytData( searchParam ) {
        var basicSearchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${searchParam}&key=AIzaSyBz2sreZUd7JjlXMM5YJRnZhDoNyM7FVXw`;
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
        })
        $('#video-player').append(newVideo);
    }
}