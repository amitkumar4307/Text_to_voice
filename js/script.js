document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const speakButton = document.getElementById('speakButton');
    const status = document.getElementById('status');

    speakButton.addEventListener('click', () => {
        const text = textInput.value.trim();

        if (text === '') {
            status.textContent = 'Please enter some text.';
            return;
        }


        if (!('speechSynthesis' in window)) {
            status.textContent = 'Sorry, your browser does not support text-to-speech.';
            return;
        }

       
        const utterance = new SpeechSynthesisUtterance(text);

        /
        utterance.pitch = 1; 
        utterance.rate = 1; 

        
        speechSynthesis.speak(utterance);

        
        status.textContent = 'Speaking...';

        
        utterance.onend = () => {
            status.textContent = 'Speech has ended.';
        };

        
        utterance.onerror = () => {
            status.textContent = 'An error occurred while speaking.';
        };
    });
});
