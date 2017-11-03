var correct=0;
var wrong=0;
var timer=20;
var flag = true;
var intervalId;
var y;
var r;
var qNum=0;
var test = [{ question:"Which game is not a sport video game?", choice1:"FIFA 17", choice2:"NBA 2K17", choice3:"Marvel vs Capcom", choice4:"NFL 17", correct: "Marvel vs Capcom", src: "assets/images/mvc.jpg" },
			{ question:"Which game involves soccer?", choice1:"NBA 2K17", choice2:"FIFA 17", choice3:"Candy Crush", choice4:"NHL 17", correct: "FIFA 17", src:"assets/images/fifa.png" },
			{ question:"Which of the following is a combat game?", choice1:"NBA 2K17", choice2:"Call of Duty", choice3:"Overwatch", choice4:"Mortal Kombat", correct: "Mortal Kombat",src: "assets/images/kombat.png" },
			{ question:"Which game is owned by Activision?", choice1:"Overwatch", choice2:"Mario Brothers", choice3:"Call of Duty", choice4:"Battlefield", correct: "Call of Duty", src: "assets/images/cod.jpg" },
			{ question:"Which of the following is a racing game?", choice1:"Mario Kart", choice2:"Dragon Ball Z: Budokai", choice3:"Smash Brothers", choice4:"Lego: Star Wars", correct: "Mario Kart", src: "assets/images/mk.jpg"},	
			{ question:"Which game is owned by Nintendo?", choice1:"Super Smash Brothers", choice2:"Dragon Ball Z: Budokai", choice3:"Tekken", choice4:"Lego: Star Wars", correct: "Super Smash Brothers", src: "assets/images/smash.jpg"},	
			{ question:"Which game was developed by King?", choice1:"Call of Duty", choice2:"Mario Party", choice3:"Candy Crush", choice4:"Street Fighter", correct: "Candy Crush", src: "assets/images/candy.jpg"},	
			{ question:"Which of the following games is a classic?", choice1:"Tekken", choice2:"Ms. Pacman", choice3:"Smash Brothers", choice4:"League of Legends", correct: "Ms. Pacman", src: "assets/images/pacman.jpeg"},	
			{ question:"Which game does the character Yoshi belong to?", choice1:"Super Mario", choice2:"Tetris", choice3:"Logo Quiz", choice4:"Lego: Star Wars", correct: "Super Mario", src: "assets/images/mario.jpg"},	
			{ question:"Which game requires the perfect arrangement of blocks to win?", choice1:"Mario Kart", choice2:"Tetris", choice3:"Pokemon Go", choice4:"Sonic", correct: "Tetris", src: "assets/images/tetris.png"}		
			];


//******** List of functions *************//
	

function startGame(){
	$(".start").css("display","none");
	
	displayQuestion();
}

function resetGame(){
	$(".question").html("<h4></h4>");
	$(".ans").off("click");
	$(".start1").css("display","none");
	// $(".start").css("display","inline");
	correct=0;
	wrong=0;
	timer=20;
	qNum=0;
	flag=true;
	displayQuestion();
}


function finalScreen(){

	$(".timer").html("<h3></h3>");
	$(".question").html("<h4> The number of correct answers is "+ correct +"</h4>");
	$(".question").append("<h4> The number of correct answers is "+ wrong +"</h4>");
	$(".start1").css("display","inline");
	$(".ans").css("display","none");
	$(".img").css("display","none");		
	clearTimeout(y);
	clearTimeout(intervalId);
}

function run() {
	
  intervalId = setInterval(decrement, 1000);

}


function decrement() {

  timer--;
  $(".timer").html("<h3> Time remaining: " + timer + "</h3>");

  if (timer === 0) {
    clearInterval(r);
  }
}


function postClick(){
	clearTimeout(y);
	clearTimeout(intervalId);	
	$(".ans").off("click");
	$(".ans").css("display","none");
	$(".img").css("display","inline");
	intervalId = setTimeout(displayQuestion,3000);
}

function timesUp(){

	clearInterval(r);
	timer=20;	
	$(".timer").html("<h3></h3>");
	clearTimeout(y);
	$(".img").attr("src",test[qNum].src);
	wrong++;
	qNum++;
	$(".question").html("<h4>Time's up! The correct answer was </h4>");
	if (qNum===10) {
		flag=false;
	}
	postClick()

}


function displayQuestion() {
		$(".timer").html("<h3> Time remaining: " + timer + "</h3>");
	 if (flag === true) {
	 	run();
		y = setTimeout(timesUp,20000);

		$(".ans").css("display","inline");
		$(".img").css("display","none");
		$(".question").html("<h4>" + test[qNum].question + "</h4>");
		$(".form").css("display","inline");
		$("#btn1").attr("value", test[qNum].choice1);
		$("#btn2").attr("value", test[qNum].choice2);
		$("#btn3").attr("value", test[qNum].choice3);
		$("#btn4").attr("value", test[qNum].choice4);


		$(".ans").on("click", function() {
			var pick = $(this).attr("value");

			if ( pick === test[qNum].correct) {
				timer=20;	
				$(".timer").html("<h3></h3>");			
				clearInterval(r);
				$(".question").html("<h4>CORRECT!!!! </h4>");
				$(".img").attr("src",test[qNum].src);
				correct++;
				qNum++;
				if (qNum===10) {
					flag=false;
				}
				postClick();

				
			}
			else{
				timer=20;	
				$(".timer").html("<h3></h3>");
				clearInterval(r);		
				$(".question").html("<h4>WRONG! THE CORRECT ANSWER WAS </h4>");
				$(".img").attr("src",test[qNum].src);
				wrong++;
				qNum++;
				if (qNum===10) {
					flag=false;
				}
				postClick();			
				
			}

		});
	 }
	 else{
	 	finalScreen();
	 }

}


//******** End of functions *************//

$(".start").click(startGame);

$(".start1").click(resetGame);




