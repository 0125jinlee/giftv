//I want to add a feature that enables sme to search again without refreshing the page.

/* 1. Grab the input */
	
document.querySelector('.js-go').addEventListener('click', function(){
	var input = document.querySelector('input').value;
	inputToUrl(input);

});

document.querySelector('.js-userinput').addEventListener('keyup', function(e){

	var input = document.querySelector('input').value;

	//if the key ENTER is pressed then execute
	if(e.which === 13) {
		inputToUrl(input);
	}

});

/* 2. Do the data stuff with the API */

function inputToUrl(input) {
	input = input.replace(' ', '+');
	var url = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=khIUaURoS1pxmiQJpw2rmkoKcmwEcCJi"

	// AJAX Request
	var GiphyAJAXCall = new XMLHttpRequest();
	GiphyAJAXCall.open( 'GET', url );
	GiphyAJAXCall.send();

	GiphyAJAXCall.addEventListener('load', function(e){

		var data = e.target.response;
		pushToDOM(data);

	});
};

/* 3. Show me random 5 GIFs */

function pushToDOM(input){

	var response = JSON.parse(input);
	var imageUrls = response.data;
	var container = document.querySelector(".js-container");
	var counter = 0;

		while (counter < 5) {
			var src = imageUrls[Math.floor(Math.random() * imageUrls.length)].images.fixed_height.url;
			container.innerHTML = "<img src=\"" + src + "\" class=\"container-image\">";
			setTimeout()
			counter++;
		};
}
	