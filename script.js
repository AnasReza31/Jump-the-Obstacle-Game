var character = document.getElementById('character');
var block = document.getElementById('block');
var gameLost = document.getElementById('lost');
var counter = document.getElementById('counter');
var counterVal = 0;

restartGame();

var checkDead = setInterval(function(){
	if(block.classList == 'animateBlock'){
		counter.innerHTML = counterVal++;
		var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
		var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
		if(blockLeft < 40 && blockLeft > 20 && characterTop >= 130){
			counter.innerHTML = counterVal;
			block.classList.remove('animateBlock');
			block.style.left = '40px';
			gameLost.style.display = 'block';
		}
	}
})

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
		if(gameLost.style.display == 'block'){
				return restartGame();
		}
        if(character.classList != 'animate' && block.classList == 'animateBlock'){
			character.classList.add('animate')
		}
		// when animate class applied, character moves up
		// so animate class should be removed in 5ms so that character comes down
		setTimeout(function(){
			character.classList.remove('animate');
		}, 500)
    }
}

function restartGame(){
	counterVal = 0;
	gameLost.style.display = 'none';
	block.classList.add('animateBlock');
}