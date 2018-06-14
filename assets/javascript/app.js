$(document).ready(function() {
	var questionCounter = 0;
    var time = 15;
    var correctGuesses = 0;
    var incorrectGuesses = 0;

    var questions = [
      {
	    question: "What year was Nintendo founded?",
	    choices: ["1969", "1989", "1982", "1889"],
	    correctAnswer: "1889",
	    image: "<img src='assets/images/nintendo.svg' class='img-responsive'>"
	  }, 
	  {
	    question: "Which film inspired the enemies in Nintendo's Metroid series?",
	    choices: ["Star Wars", "Galaxy of Terror", "Alien", "Predator"],
	    correctAnswer: "Alien",
	    image: "<img src='assets/images/metroid.png' class='img-responsive'>"
	  }, 
	  {
	    question: "In Zelda, where did the fairy Navi get her name?",
	    choices: ["Navigate", "Natus Vincere", "Navel", "Navy"],
	    correctAnswer: "Navigate",
	    image: "<img src='assets/images/navi.png' class='img-responsive'>"
	  }, 
	  {
	    question: "What is the best-selling Nintendo exclusive game of all time?",
	    choices: ["Duck Hunt", "Super Mario Bros.", "Mario Kart Wii", "Wii Sports"],
	    correctAnswer: "Wii Sports",
	    image: "<img src='assets/images/wiiSports.jpg' class='img-responsive'>"
	  }, 
	  {
	    question: "Nintendo got its start making:",
	    choices: ["Playing Cards", "Toys", "Video Games", "Plumbing"],
	    correctAnswer: "Playing Cards",
	    image: "<img src='assets/images/card.jpg' class='img-responsive'>"
	  },
	  {
	    question: "What is the best-selling Nintendo handheld of all time?",
	    choices: ["Game Boy", "Game Boy Advance", "Nintendo DS", "Nintendo 3DS"],
	    correctAnswer: "Nintendo DS",
	    image: "<img src='assets/images/nintendoDS.png' class='img-responsive'>"
	  },
	  {
	    question: "The company once owned a baseball team. Which one?",
	    choices: ["Oakland As", "NY Yankees", "LA Dogers", "Seattle Mariners"],
	    correctAnswer: "Seattle Mariners",
	    image: "<img src='assets/images/mariners.svg' class='img-responsive'>"
	  },
	  {
	    question: "Nintendo had the same president for more than:",
	    choices: ["10 years", "50 years", "25 years", "75 years"],
	    correctAnswer: "50 years",
	    image: "<img src='assets/images/president.jpg' class='img-responsive'>"
	  },
	  {
	    question: "Which Nintendo game caused enough injuries in children to result in a $80M settlement?",
	    choices: ["Tony Hawk's Pro Skater", "Super Smash Bros.", "Mario Kart 64", "Mario Party"],
	    correctAnswer: "Mario Party",
	    image: "<img src='assets/images/mario-party.png' class='img-responsive'>"
	  },
	  {
	    question: "Nintendo's first successful console was the NES. What does NES stand for?",
	    choices: ["Nintendo Electronic Station", "Nintendo Electronic System", "Nintendo Entertainment System", "Nintendo Entertainment Station"],
	    correctAnswer: "Nintendo Entertainment System",
	    image: "<img src='assets/images/nes.jpg' class='img-responsive'>"
	  },
	  {
	    question: "What is the first Nintendo game to feature Mario in it?",
	    choices: ["Super Mario Bros.", "Mario Tennis", "Donkey Kong", "Smash Bros."],
	    correctAnswer: "Donkey Kong",
	    image: "<img src='assets/images/donkeyKong.png' class='img-responsive'>"
	  },
	  {
	    question: "Which was the first console game that allowed you to save your game?",
	    choices: ["Legend of Zelda", "Super Mario Bros.", "Punch Out!!!", "Dragon Warrior"],
	    correctAnswer: "Legend of Zelda",
	    image: "<img src='assets/images/cartridge.jpg' class='img-responsive'>"
	  },
	  {
	    question: "What was the first NES game to use the 'Konami Code'?",
	    choices: ["Contra", "Life Force", "Gradius", "R-Type"],
	    correctAnswer: "Gradius",
	    image: "<img src='assets/images/gradius.jpeg' class='img-responsive'>"
	  },
	  {
	    question: "Which was the first SNES game to render 3D graphics?",
	    choices: ["Pilot Wings", "Star Fox", "Doom", "Super Mario World 2: Yoshi's Island"],
	    correctAnswer: "Star Fox",
	    image: "<img src='assets/images/starfox.png' class='img-responsive'>"
	  },
	  {
	    question: "What was Mario's original name?",
	    choices: ["Jumpman", "Link", "Luigi", "Big Red"],
	    correctAnswer: "Jumpman",
	    image: "<img src='assets/images/jumpman.gif' class='img-responsive'>"
	  }];
	  

	// create question contents according to question count
	function questionContent() {
    	$(".gameScreen").append("<p><strong>" + 
    		questions[questionCounter].question + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[0] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[1] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[2] + 
    		"</p><p class='choices'>" + 
    		questions[questionCounter].choices[3] + 
    		"</strong></p>");
	}

	// user guessed correctly
	function right() {
		$(".gameScreen").html("<p>You got it right!</p>");
		correctGuesses++;
		var correctAnswer = questions[questionCounter].correctAnswer;
		$(".gameScreen").append("<p>The answer was <span class='answer'>" + 
			correctAnswer + 
			"</span></p>" + 
			questions[questionCounter].image);
		setTimeout(nextQuestion, 4000);
		questionCounter++;
	}

	// user guessed incorrectly
	function wrong() {
		$(".gameScreen").html("<p>Nope, that's not it!</p>");
		incorrectGuesses++;
		var correctAnswer = questions[questionCounter].correctAnswer;
		$(".gameScreen").append("<p>The answer was <span class='answer'>" + 
			correctAnswer + 
			"</span></p>" + 
			questions[questionCounter].image);
		setTimeout(nextQuestion, 4000);
		questionCounter++;
	}

	// user ran out of time
	function timesUp() {
		if (time === 0) {
			$(".gameScreen").html("<p>You ran out of time!</p>");
			incorrectGuesses++;
			var correctAnswer = questions[questionCounter].correctAnswer;
			$(".gameScreen").append("<p>The answer was <span class='answer'>" + 
				correctAnswer + 
				"</span></p>" + 
				questions[questionCounter].image);
			setTimeout(nextQuestion, 4000);
			questionCounter++;
		}
	}

	// screen that shows final score and nice message
	function resultsScreen() {
		if (correctGuesses === questions.length) {
			var endMessage = "Perfect! Might want to go outside more though";
			var audio = new Audio('audio_file.mp3');
			audio.play();
		}
		else if (correctGuesses > incorrectGuesses) {
			var endMessage = "Good work! But you can do better...";
		}
		else {
			var endMessage = "You seem to have taken an arrow to the knee";
		}
		$(".gameScreen").html("<p>" + endMessage + "</p>" + "<p>You got <strong>" + 
			correctGuesses + "</strong> right.</p>" + 
			"<p>You got <strong>" + incorrectGuesses + "</strong> wrong.</p>");
		$(".gameScreen").append("<h1 id='start'>Start Over?</h1>");
		$("#bottomText").html(bottomText);
		gameReset();
		$(".start").click(nextQuestion);
	}

	// game clock:
	function timer() {
		clock = setInterval(countDown, 1000);
		function countDown() {
			if (time < 1) {
				clearInterval(clock);
				timesUp();
			}
			if (time > 0) {
				time--;
			}
			$("#timer").html("<strong>" + time + "</strong>");
		}
	}

	// moves question counter forward to show next question
	function nextQuestion() {
		if (questionCounter < questions.length) {
			time = 15;
			$(".gameScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
			questionContent();
			timer();
			timesUp();
		}
		else {
			resultsScreen();
		}
	}

	// reset score and counter parameters on restart
	function gameReset() {
		questionCounter = 0;
		correctGuesses = 0;
		incorrectGuesses = 0;
	}

    function startGame() {
    	$(".gameScreen").html("<p>You have <span id='timer'>" + time + "</span> seconds left!</p>");
		$(".start .gameScreen").hide();
		questionContent();
    	timer();
    	timesUp();
    }

    // this starts the game
    $(".start").click(nextQuestion);

    // click function to trigger right or wrong screen
	$(".gameScreen").on("click", ".choices", (function() {
		var userGuess = $(this).text();
		if (userGuess === questions[questionCounter].correctAnswer) {
			clearInterval(clock);
			right();
		}
		else {
			clearInterval(clock);
			wrong();
		}
	}));
});

// $('document').ready(function () {
// 	console.log("Check 1, 2; check 1, 2...");

// 	var correctQuestions = 0;
// 	var incorrectQuestions = 0;
// 	var unansweredQuestions = 0;
// 	var counter;
// 	var timeLeft;

// 	/* click button to begin */

// 	$(".start").on("click", function () {
// 		/* hide start screen, show questions */
// 		$(".start, .startScreen").fadeOut(0);
// 		$(".questions, .sectionWrap").fadeIn(1000);

// 		timeLeft = 5;
// 		counter = setTimeout(function () {
// 			timesUp();
// 		}, 5000);

// 		/* countDownDisplay function runs every second */
// 		secondsInterval = setInterval(countDownDisplay, 1000);

// 		/* if time remaining is greater than 0, decrease time remaining */
// 		function countDownDisplay() {
// 			if (timeLeft > 0) {
// 				timeLeft--;
// 				$(".timer").html(timeLeft + " Seconds Remaining");
// 			}
// 		}

// 		function timesUp() {
// 			triviaValues();
// 			showResults();
// 			$(".sectionWrap, .done").fadeOut();
// 			$("wrapper").html(".results").fadeIn(2000);
// 		}
// 	}); /* end start button click */

// 	/* loop for questions */
// 	function triviaValues() {
// 		for (i = 0; i < 8; i++) {
// 			/* index of each a1, a2, a3, etc */
// 			var userInput = $('input[name="a+ i +"]:checked').value;
// 			/* add to score counters */
// 			if (userInput === "true") {
// 				correctQuestions++;
// 			} else if (userInput === "false") {
// 				incorrectQuestions++;
// 			} else if (userInput === "default") {
// 				unansweredQuestions++;
// 			}
// 		}
// 	}

// 	function showResults() {
// 		/* clear time counters, stop timers from running */
// 		clearInterval(counter);
// 		timeLeft = 0;
// 		/* insert values to html */
// 		$(".results").html("<li> You got " + correctQuestions + " right </li>" +
// 			"<li> You got " + incorrectQuestions + " wrong </li>" +
// 			"<li>" + unansweredQuestions +
// 			" remain unanswered</li>");
// 	}
	
// 	/* click 'Done', get values, return values, and hide trivia questions */
// 	$(document).on("click", ".done", function() {
// 		var resultsDiv = ".results";
// 		triviaValues();
// 		showResults();
// 		$(".sectionWrap").fadeOut(1000);
// 		$(".sectionWrap").html(resultsDiv).fadeIn(2000);
// 	});

// 	/* click 'Reset' to restore defaults */
// 	$(document).on("click", ".reset", function() {
// 		correctQuestions = 0;
// 		incorrectQuestions = 0;
// 		unansweredQuestions = 0;
// 		clearInterval(counter, secondsInterval);
// 		timeLeft = 0;
// 		$(".sectionWrap, .results").fadeOut(1000);
// 		$(".timer").html("");
// 		$(".startScreen, .start").fadeIn(2000);
// 	});
// });