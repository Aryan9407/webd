var color = ["red", "blue", "green", "yellow" ];

var userClickedPattern  = [];
var GamePattern = [];

var started = false;
var level =0;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSequence();
    }
    started = true;

})


$(".btn").click(function(){
    clickedColor = $(this).attr("id");
    userClickedPattern.push(clickedColor);
    playSound(clickedColor);
    animatePress(clickedColor);
    checkAnswer(userClickedPattern.length-1);
    
});

function checkAnswer(currLevel){
    if(userClickedPattern[currLevel] === GamePattern[currLevel]){
        console.log("success");
        if(userClickedPattern.length === GamePattern.length){
                setTimeout(function(){
                    nextSequence();
                },1000);
        } 
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
    setTimeout(function(){
        $("body").removeClass("game-over");
    },200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
    
}

function nextSequence(){
    userClickedPattern = [];
    level++;

    $("#level-title").text("Level " + level)

    var randomNo = Math.floor( Math.random()*4);
    var randomColor = color[randomNo];
    
    GamePattern.push(randomColor);

    $("#"+randomColor).fadeOut(50).fadeIn(50);
    playSound(randomColor);
    
}

function playSound(color){
    var audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}

function animatePress(color){
    $("#"+color).addClass("pressed");
    setTimeout(function(){
        $("#"+color).removeClass("pressed");
    },100);
}

function startOver(){
    level=0;
    gamePattern = [];
    started = false;
}






 