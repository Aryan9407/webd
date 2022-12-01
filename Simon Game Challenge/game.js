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
    
});

function nextSequence(){
    level++;

    $("#level-title").text("Level " + level)

    var randomNo = Math.floor( Math.random()*4);
    var randomColor = color[randomNo];
    
    GamePattern.push(randomColor);

    $("#"+randomColor).fadeOut(60).fadeIn(60);
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


function checkAnswer(){

}





 