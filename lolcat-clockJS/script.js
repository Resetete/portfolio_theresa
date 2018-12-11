var time = new Date().getHours();
var messageText;
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg"; //default image
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM


var updateClock = function ()
{
var timeEventJS = document.getElementById('timeEvent');
var imageJS = document.getElementById("lolcat");

if (time == partyTime){
    messageText = "IZ PARTEE TIME!!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
} else if (time == napTime) {
    messageText = "IZ NAP TIME…";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
} else if (time == lunchTime) {
    messageText = "Its Lunch time!!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
} else if (time == wakeupTime) {
    messageText = "IZ TIME TO GETTUP.";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
} else if (time < noon) {
    messageText = "Good morning!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
} else if (time > evening) {
    messageText = "Good Evening!";
	image ="https://media.giphy.com/media/iPiUxztIL4Sl2/giphy.gif";
} else {
    messageText = "Good afternoon!";
	image = "https://media.giphy.com/media/iPiUxztIL4Sl2/giphy.gif";
}

timeEventJS.innerText = messageText;
imageJS.src = image;
showCurrentTime();

};


var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};




// call the new update Clock funktion
updateClock();
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// party time button config
var partyTimeButtonJS = document.getElementById("partyTimeButton");

var isPartyTime = false;
var buttonText;

var partytimeFuntion = function()
	{
		if (isPartyTime === false)
		{
		isPartyTime = true;
      	time = partyTime;	partyTimeButtonJS.innerText = "Start Party";
partyTimeButtonJS.style.backgroundColor = "red";
// sets the document background color to default color
document.body.style.background = "";
		}
		else
		{
		isPartyTime = false;
		time = new Date().getHours();	partyTimeButtonJS.innerText="Stop Party";

		// change button backgroundcolor when button clicked
partyTimeButtonJS.style.backgroundColor="blue";
// changes the page background color when button is clicked
document.body.style.background = "pink";
		}
	};


partyTimeButtonJS.addEventListener("click",partytimeFuntion);

// Set up the user defined times --> time changing selectors
var wakeUpTimeSelectorJS = document.getElementById("wakeUpTimeSelector");

var changeWakeUpTimes = function()
	{
	// this function assigns the time values the user will select in the time selector on the page to the wakeupTime variable (see var definitions on top of page
	// wakeUpTimeSelectorJS (value) --> assigns the slected value to that wakeuptime variable
	wakeupTime =  wakeUpTimeSelectorJS.value;
	};

// call the function when a "change event" is executed on the wakeuptime selector box
wakeUpTimeSelectorJS.addEventListener("change",changeWakeUpTimes);

// lunch time settings
var lunchTimeSelectorJS = document.getElementById("lunchTimeSelector");
var changeLunchTime = function()
	{
	lunchTime =  lunchTimeSelectorJS.value;
	};
lunchTimeSelectorJS.addEventListener("change",changeLunchTime);

// nap time settings
var napTimeSelectorJS = document.getElementById("napTimeSelector");

var changeNapTime = function()
	{
	napTime =  napTimeSelectorJS.value;
	};
napTimeSelectorJS.addEventListener("change",changeNapTime);
