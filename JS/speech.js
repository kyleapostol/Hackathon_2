class Speech {
    constructor() {
        this.speak = this.speak.bind()
    }
    speak(word) {
        responsiveVoice.speak(word); 
    }
}
