$(document).ready(function(){






	var topic = ["jim carrey", "robin williams", "obama"];

function display () {
var ppl=$(this).data("name");

alert(ppl)

	var APIKey = "dc6zaTOxFJmzC";
	//var search = ("jim" + "Carrey");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + ppl + "&api_key=" + APIKey;


$.ajax({url: queryURL, method: "GET"})

	.done(function(response) {
		console.log(response);
		var imageLink = response.data;

		for(var i = 0; i<imageLink.length; i++) {
			var gifs = $("<div class='item'>")

			var image = $("<img>");
			image.attr("src", imageLink[i].images.fixed_height.url);

			gifs.append(ppl)
			gifs.append(image);

		$("#images").prepend(gifs);


        }


});



};




display();

function createButton() {

	for(var j = 0; j<topic.length; j++) {

	$("#themeButtons").append($("<button>" + topic[j] + "</button>"));

}



};

createButton();


 //$("#addperson").on("click", function() {

// 	var person = $(this).data("person");
// 	var APIKey = "dc6zaTOxFJmzC";
// 	//var search = ("jim" + "Carrey");
// 	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=" + APIKey;


// $.ajax({url: queryURL, method: "GET"})

// 	.done(function(response) {
// 		console.log(response);
// 		var imageLink = response.data;

// 		for(var i = 0; i<imageLink.length; i++) {
// 			var gifs = $("<div class='item'>")

// 			var image = $("<img>");
// 			image.attr("src", imageLink[i].images.fixed_height.url);

// 			gifs.append(person)
// 			gifs.append(image);

// 		$("#images").prepend(gifs);


// 		createButton(person);
// 		}








});