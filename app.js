const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

//
const rain = [
    'A little rain wont hurt. we will drown by 2050 if we dont do anything '
];

const weather = [ 'you know, the weather will be worse in 5 years ' ];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log('voice is activated');
};

recognition.onresult = function(event) {
    const current = event.resultIndex;
    
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

//add the listener to the btn

btn.addEventListener('click', () => {
    recognition.start();
});


function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    if (message.includes('rain')) {
        const finalText = rain[Math.floor(Math.random() * rain.length)];
        speech.text = finalText;
    }

    if (message.includes('weather')) {
        const finalText = weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.rate =1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}