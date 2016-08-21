$(document).ready(function(){



	var topic = ["jim carrey", "robin williams", "obama"];






function display () {

	var ppl = $(this).data("name");

	var APIKey = "dc6zaTOxFJmzC";
	//var search = ("jim" + "Carrey");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + ppl + "&api_key=" + APIKey + "&limit=10";


$.ajax({url: queryURL, method: "GET"})

	.done(function(response) {
		console.log(response);
		var imageLink = response.data;

		for(var i = 0; i<imageLink.length; i++) {
			var gifs = $("<div class='stopStart'>")

			var image = $("<img>");
			image.attr("src", imageLink[i].images.original_still.url);

            
		
			gifs.append("rating: ", imageLink[i].rating + " <br>")
			gifs.append(image);
			gifs.attr("data-state", "still")

            
           

		$("#images").prepend(gifs);

       
      $('.stopStart').on('click', function(){
			var state = $(this).attr("data-state");

			if (state == "still") {
				$(this).attr('src', $(this).attr("data-animate"));
				 $(this).attr('data-state', 'animate');
				  image.attr("src", imagesLink[i].images.fixed_height.url)
			
			}
	  		else {
	            $(this).attr('src', $(this).attr("data-still"));
	            $(this).attr('data-state', 'animate');
	        }

      });


       };

  });



};






function createButton() {
	$('#themeButtons').empty();

	for(var j = 0; j<topic.length; j++) {


		var button = $("<button>"); 
		button.addClass("ppl")
		button.attr('data-name', topic[j]);
		button.text(topic[j]);
		$("#themeButtons").append(button);
      
	}



}



$(document).on('click', '.ppl', display);
createButton();



	$("#addPerson").on('click', function(){

		// This line of code will grab the input from the textbox
		var person = $("#theme-input").val().trim();

		// The movie from the textbox is then added to our array
		topic.push(person);
		
		// Our array then runs which handles the processing of our movie array
		createButton();

		// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
		return false;
	})


// $("#addperson").on("click", function() {

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