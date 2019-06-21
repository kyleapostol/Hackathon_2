class LoadScreen {
    constructor() {
        this.welcomeScreen = this.welcomeScreen.bind(this);
        this.handleUserInformation = this.handleUserInformation.bind(this);
        this.getLocation = this.getLocation.bind(this);
        this.updateClock = this.updateClock.bind(this);
        this.updateGreeting = this.updateGreeting.bind(this);
        this.loadScreenBackground = new Unsplash;
        this.loginModal;
    }
    welcomeScreen() {
        // this.loadScreenBackground.getImageLoadScreen();
        this.loginModal = $('#login-modal');
        this.loginModal.css('display', 'block');
        this.updateClock();
        $('.user-name-button').on('keypress', this.handleUserInformation);
    }
    handleUserInformation() {
        var username = $('.user-name-input').val();
        if (username) {
            loginModal.style.display = "none";
            this.getLocation;
            return username;
        } else {
            alert('please enter a name!');
        }
    }
    getLocation() {
        var newDarkSky = new DarkSkyObject;
        if (Object.keys(navigator.geolocation).length) {
            navigator.geolocation.getCurrentPosition(function(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                newDarkSky.currentLocation(latitude, longitude);
            });
        } else {
            var errorMessage = "Geolocation is not supported by this browser. Please input your location manually (lon/lat):";
            var errorModal = $('<div>').addClass('error-modal');
            var modalContent = $('<div>').addClass('error-modal-content').css({
                'height': '100%',
                'width': '100%',
                'z-index': 1,
                'border': '2px black solid',
                'position': 'absolute'
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
                    newDarkSky.currentLocation(latitude, longitude);
                }
            })
        }
    }
    updateClock() {
        var currentTime = new Date ( );
        var currentHours = currentTime.getHours ( );
        var currentMinutes = currentTime.getMinutes ( );
        // var currentSeconds = currentTime.getSeconds ( );

        currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;

        var timeOfDay = (currentHours < 12) ? "AM" : "PM";

        currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

        currentHours = (currentHours == 0) ? 12 : currentHours;

        var currentTimeString = currentHours + ":" + currentMinutes + timeOfDay;
        
        $(".modal-clock").html(currentTimeString);
        this.updateGreeting(currentHours)
    }

    updateGreeting( hour ) {
        var greeting = $('.modal-greeting');
        if (hour < 11) {
            
        }
    }

}