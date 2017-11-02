var correct=0;
var wrong=0;
var timer=10;
var flag = true;
var intervalId;
var y;
var qNum=0;
var test = [{ question:"What is 2+2 is :", choice1:"4", choice2:"5", choice3:"6", choice4:"7", correct: "4", src: "http://freetvhd.net/wp-content/uploads/2015/02/wivb.png" },
			{ question:"Which of the following is not a prime number:", choice1:"Two", choice2:"Three", choice3:"Four", choice4:"Five", correct: "Four", src:"http://images5.fanpop.com/image/photos/26600000/8-and-3-random-26674205-347-346.jpg" },
			{ question:"3+3", choice1:"q3answer1", choice2:"answer2", choice3:"answer3", choice4:"answer4", correct: "answer3",src: "https://erasmusorgasmusprague.files.wordpress.com/2010/12/600px-wiimotebutton2-svg.png" },
			{ question:"question4", choice1:"q4answer1", choice2:"answer2", choice3:"answer3", choice4:"answer4", correct: "answer4", src: "http://www.rajankhanna.com/wp-content/uploads/2011/12/one-1.jpg" },
			{ question:"question5", choice1:"q5answer1", choice2:"answer2", choice3:"answer3", choice4:"answer4", correct: "answer1", src: "https://pbs.twimg.com/profile_images/875707706618904578/czlhbBLn_400x400.jpg"}			
			];


//******** List of functions *************//
	

function startGame(){
	$(".start").css("display","none");
	
	displayQuestion();
}

function resetGame(){
	$(".question").html("<h3></h3>");
	$(".ans").off("click");
	$(".start1").css("display","none");
	$(".start").css("display","inline");
	correct=0;
	wrong=0;
	timer=10;
	qNum=0;
	flag=true;
}


function finalScreen(){
	$(".question").html("<h3> The number of correct answers is "+ correct +"</h3>");
	$(".question").append("<h3> The number of correct answers is "+ wrong +"</h3>");
	$(".start1").css("display","inline");
	$(".ans").css("display","none");
	$(".img").css("display","none");		
	clearTimeout(y);
	clearTimeout(intervalId);
}

// function run() {
//   intervalId = setInterval(decrement, 1000);

// }


// function decrement() {

//   timer--;
//   $(".timer").html("<p> Time remaining: " + timer + "</p>");

//   if (timer === 0) {
//     clearInterval(intervalId);
//   }
// }


function postClick(){
	clearTimeout(y);
	clearTimeout(intervalId);	
	$(".ans").off("click");
	$(".ans").css("display","none");
	$(".img").css("display","inline");
	intervalId = setTimeout(displayQuestion,3000);
}

function timesUp(){
	clearTimeout(y);
	$(".img").attr("src",test[qNum].src);
	wrong++;
	qNum++;
	$(".question").html("<h2>Times up. The correct answer was </h2>");
	if (qNum===5) {
		flag=false;
		postClick();
	}
	else{
		postClick()
	}	
}


function displayQuestion() {
	 if (flag === true) {
		y = setTimeout(timesUp,10000);
		
		$(".ans").css("display","inline");
		$(".img").css("display","none");
		$(".question").html("<h2>" + test[qNum].question + "</h2>");
		$(".form").css("display","inline");
		$("#btn1").attr("value", test[qNum].choice1);
		$("#btn2").attr("value", test[qNum].choice2);
		$("#btn3").attr("value", test[qNum].choice3);
		$("#btn4").attr("value", test[qNum].choice4);


		$(".ans").on("click", function() {
			var pick = $(this).attr("value");

			if ( pick === test[qNum].correct) {
				$(".question").html("<h2>CORRECT!!!! </h2>");
				$(".img").attr("src",test[qNum].src);
				correct++;
				qNum++;
				if (qNum===5) {
					flag=false;
					postClick();
				}
				else{
					postClick();
				}

				
			}
			else{
				$(".question").html("<h2>WRONG THE CORRECT ANSWER WAS </h2>");
				$(".img").attr("src",test[qNum].src);
				wrong++;
				qNum++;
				if (qNum===5) {
					flag=false;
					postClick();
				}
				else{
					postClick();
				}			
			
				
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




