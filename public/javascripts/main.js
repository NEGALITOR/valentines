const noButton = document.getElementById('noBtn');
const yesButton = document.getElementById('yesBtn');

if ('speechSynthesis' in window) 
	console.log("supported")
else
	console.log("not supported")

let speakData = new SpeechSynthesisUtterance()
speakData.volume = 1;
speakData.rate = 1;
speakData.pitch = 1;
speakData.lang = 'en';
speakData.voice = getVoices()[2]; // 2  10

const noWords = ["No.", "Don't touch meeeeeee!", "Shoo Shoo", "Why are you chasing me >:|", "Are you serious?", "You don't want me? ;-;", "WHYYYYY!?!?!", "AAAAAAAAH!", "Mochi...how could you..."]
var prev, curr = ""
noButton.addEventListener('mouseover', function() {

	speechSynthesis.cancel()
	noButton.style.left = `${Math.ceil(Math.random() * 85)}%`;
	noButton.style.top = `${Math.ceil(Math.random() * 90)}%`;
	
	curr = noWords[Math.floor(Math.random() * noWords.length)]
	
	while (curr === prev)
		curr = noWords[Math.floor(Math.random() * noWords.length)]

	noButton.textContent = curr
	speakData.text = curr
	
	speechSynthesis.speak(speakData)
	
 	
 	prev = curr
	
})


noButton.addEventListener('click', function() {
	noButton.style.left = `${Math.ceil(Math.random() * 90)}%`;
	noButton.style.top = `${Math.ceil(Math.random() * 90)}%`;
	
	speechSynthesis.cancel()
	noButton.textContent = "Bleh! ٩꒰ʘʚʘ๑꒱۶"
	speakData.text = "Bleh!"
	
	speechSynthesis.speak(speakData)
	
	
})

function getVoices() {
  let voices = speechSynthesis.getVoices();
  if(!voices.length){
    let utterance = new SpeechSynthesisUtterance("");
    speechSynthesis.speak(utterance);
    voices = speechSynthesis.getVoices();
  }
  return voices;
}
