class LoadScreen {
    constructor() {
        this.welcomeScreen = this.welcomeScreen.bind(this);
        this.handleUserInformation = this.handleUserInformation.bind(this);
        this.getLocation = this.getLocation.bind(this);
        this.updateClock = this.updateClock.bind(this);
        this.updateGreeting = this.updateGreeting.bind(this);
        this.loginModal;
    }
    welcomeScreen() {
        this.loginModal = $('#login-modal');
        this.loginModal.css('display', 'block');
        this.updateClock();
        $(document).on('keypress', function(e) {
            if (e.which == 13) {
                this.handleUserInformation(this.loginModal);
            }
        }.bind(this));
    }
    handleUserInformation( modal ) {
        var username = $('.user-name-input').val();
        if (username) {
            modal.fadeOut(2000);
            this.getLocation();
            $('.weather-greeting').text('Welcome, ' + username);
        } else {
            alert('please enter a name!');
        }
    }
    getLocation() {
        var newDarkSky = new DarkSkyObject();
        var latitude;
        var longitude;
        //fix this conditional - always returns empty object;
        navigator.geolocation.getCurrentPosition(function(position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            newDarkSky.currentLocation(latitude, longitude);
        });
        if (!Object.keys(navigator.geolocation).length) {
            var errorMessage = "We were unable to automatically grab your location. Please input your location manually.";
            var locationModal = $('#location-modal');
            $('#error-message').text(errorMessage);
            locationModal.css('display', 'block');
            $(document).on('keypress', function(e){
                var inputLatitude = $('#latitude-input').val();
                var inputLongitude = $('#longitude-input').val();
                if (e.which == 13) {
                    if (inputLatitude && inputLongitude) {
                        latitude = parseFloat(inputLatitude);
                        longitude = parseFloat(inputLongitude);
                        newDarkSky.currentLocation(latitude, longitude);
                        locationModal.fadeOut(1500);
                    }
                }
            })
        }
    }
    updateClock() {
        var currentTime = new Date();
        var currentHours = currentTime.getHours();
        var currentMinutes = currentTime.getMinutes();
        currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
        var timeOfDay = (currentHours < 12) ? "AM" : "PM";
        currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
        currentHours = (currentHours == 0) ? 12 : currentHours;
        var currentTimeString = currentHours + ":" + currentMinutes + timeOfDay;
        $(".modal-clock").html(currentTimeString);
        this.updateGreeting(currentHours, timeOfDay);
    }
    updateGreeting( hour, timeOfDay ) {
        this.greeting = "";
        if (hour < 11 && timeOfDay === 'AM') {
            this.greeting = `Good Morning`;
        } else if (hour >= 11 && timeOfDay === 'AM'){
            this.greeting = `Good Afternoon`;
        } else if (hour <= 2 && timeOfDay === 'PM') {
            this.greeting = `Good Afternoon`;
        } else if (hour >  2 && timeOfDay === 'PM') {
            this.greeting = `Good Evening`;
        }
        $('.modal-greeting').text(this.greeting);
    }
}