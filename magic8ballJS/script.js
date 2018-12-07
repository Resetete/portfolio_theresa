$(document).ready(function()
{
var magic_ball = {};
// to hide the default answer text
$("#answer").hide();

magic_ball.list_of_answers = ["As I see it yes","Most likely","Better not tell you now","Concentrate and ask again.","Very doubtful."];

magic_ball.select_random_answer = function (question)
	{
	// hide answer
	$("#answer").hide();
	// change the image of the ball to the red triangle when answer is revealed
$("#8ball").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	//fade in the answer slowly
	$("#answer").fadeIn(3000);

	var random_num = Math.random();

	var randomindex = random_num * this.list_of_answers.length;
	var random_down = Math.floor(randomindex);
	console.log(random_down);

	var random_answer = this.list_of_answers[random_down];
	console.log(question);
	console.log(random_answer);
	var answer = random_answer;
	$("#answer").text( answer );

	};

// executs a code when clicking the "ask a question button"
var onClick = function()
{
	// set up a time that the code will delay before executed the code before to give it time to finish (e.g a fadeIn)
setTimeout(
	function() {
var question = prompt("What do you want to ask?"); magic_ball.select_random_answer(question);
	}, 500);
};

$("#questionButton").click( onClick );
});
