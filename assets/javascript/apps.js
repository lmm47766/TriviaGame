var correct=0;
var wrong=0;
var timer=10;
var intervalId;
var qNum=0;
var test = [{ question:"What is 2+2 is :", choice1:"4", choice2:"5", choice3:"6", choice4:"7", correct: "4", src: "http://freetvhd.net/wp-content/uploads/2015/02/wivb.png" },
			{ question:"Which of the following is not a prime number:", choice1:"Two", choice2:"Three", choice3:"Four", choice4:"Five", correct: "Four", src:"http://images5.fanpop.com/image/photos/26600000/8-and-3-random-26674205-347-346.jpg" },
			{ question:"3+3", choice1:"q3answer1", choice2:"answer2", choice3:"answer3", choice4:"answer4", correct: "answer3",src: "https://erasmusorgasmusprague.files.wordpress.com/2010/12/600px-wiimotebutton2-svg.png" },
			{ question:"question4", choice1:"q4answer1", choice2:"answer2", choice3:"answer3", choice4:"answer4", correct: "answer4", src: "http://www.rajankhanna.com/wp-content/uploads/2011/12/one-1.jpg" },
			{ question:"question5", choice1:"q5answer1", choice2:"answer2", choice3:"answer3", choice4:"answer4", correct: "answer1", src: "https://pbs.twimg.com/profile_images/875707706618904578/czlhbBLn_400x400.jpg"}			
			];


//******** List of functions *************//
	

function startGame(){
	$(".button").remove();
	
	displayQuestion();


}

function run() {
  intervalId = setInterval(decrement, 1000);

}


function decrement() {

  timer--;
  $(".timer").html("<p> Time remaining: " + timer + "</p>");

  if (timer === 0) {
    clearInterval(intervalId);
  }
}


function postClick(){
	$(".btn").off("click");
	$(".btn").css("display","none");
	$(".img").css("display","inline");
	$(".img").attr("src",test[qNum].src);
	qNum++;
	var x = setTimeout(displayQuestion,3000);
}


function displayQuestion() {
	
	$(".btn").css("display","inline");
	$(".img").css("display","none");
	$(".question").html("<p>" + test[qNum].question + "</p>");
	$(".form").css("display","inline");
	$("#btn1").attr("value", test[qNum].choice1);
	$("#btn2").attr("value", test[qNum].choice2);
	$("#btn3").attr("value", test[qNum].choice3);
	$("#btn4").attr("value", test[qNum].choice4);


	$(".btn").on("click", function() {
		var pick = $(this).attr("value");

		if ( pick === test[qNum].correct) {
			$(".question").html("<p>CORRECT!!!! </p>");
			correct++;
			postClick();

			
		}
		else{
			$(".question").html("<p>WRONG THE CORRECT ANSWER WAS </p>");
			wrong++;
			postClick();
		
			
		}

	});

}


//******** End of functions *************//

$(".btn").click(startGame);

