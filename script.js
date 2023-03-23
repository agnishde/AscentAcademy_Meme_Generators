const form = document.querySelector('form');
const topTextDisplay = document.querySelector('#top-text-display');
const bottomTextDisplay = document.querySelector('#bottom-text-display');
const memeImage = document.querySelector('#meme-image');

form.addEventListener('submit', function(event) {
	event.preventDefault();
	const topText = document.querySelector('#top-text').value;
	const bottomText = document.querySelector('#bottom-text').value;
	const imageUrl = document.querySelector('#image-url').value;
	
	topTextDisplay.textContent = topText;
	bottomTextDisplay.textContent = bottomText;
	memeImage.src = imageUrl;
});
