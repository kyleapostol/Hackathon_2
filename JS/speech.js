class Speech{
    constructor(){
        this.speak = this.speak.bind()
    }
    
    speak(word){
        responsiveVoice.speak(word); //pass in a string            
    }
}
//var x = new Speech();
//x.speak();











/*
NOTES-
when creating a class, they are self contained 
if you want to access the class, it should be passed in the constructor



*/