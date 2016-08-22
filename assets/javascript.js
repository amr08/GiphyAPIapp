$(document).ready(function(){


var topic = ["Jim Carrey", "Robin Williams", "Obama"];

	$('#themeButtons').empty();
	$('#images').empty();
	$('#images').val("");
	$('#themeButtons').val("");


function display () {

	var ppl = $(this).data("name");

	var APIKey = "dc6zaTOxFJmzC";
	//var search = ("jim" + "Carrey");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + ppl + "&api_key=" + APIKey+ "&limit=10";


	$.ajax({url: queryURL, method: "GET"})

		.done(function(response) {
			console.log(response);
			var imageLink = response.data;

			for(var i = 0; i<imageLink.length; i++) {
			
					var gifs = $("<div class='items'>")

					var image = $("<img>");

				    image.attr("src", imageLink[i].images.fixed_height_still.url)
		            image.attr("data-still", imageLink[i].images.fixed_height_still.url)
		            image.attr("data-state", "still")
		            image.addClass("stopStart")
		           
	                image.attr("data-animate", imageLink[i].images.fixed_height.url);
				   
		
					gifs.append("rating: ", imageLink[i].rating + " <br>")
					gifs.append(image);

					$("#images").prepend(gifs);
$('#images').val("");
	  		}


	       
	      	$('.stopStart').on('click', function(){


				var state = $(this).attr("data-state");


					if ( state == 'still'){

		                $(this).attr('src', $(this).data('animate'));
		                $(this).attr('data-state', 'animate');
		            }

		            else{

		                $(this).attr('src', $(this).data('still'));
		                $(this).attr('data-state', 'still');
		            }

			});    

	});

};

//end function display






function createButton() {



	for(var j = 0; j<topic.length; j++) {


		var button = $("<button>"); 
		button.addClass("ppl")
		button.attr('data-name', topic[j]);
		button.text(topic[j]);

		$("#themeButtons").append(button);
      

	}

};
//end function createButton


//global

$('#images').empty();
$('#images').val("");
$(document).on('click', '.ppl', display);

	
	

createButton();

//end global



$("#addPerson").on('click', function(){

 $('#themeButtons').empty();
	
	var person = $("#theme-input").val().trim();

	topic.push(person);
		
	createButton();

	return false;

});




//end JS

});