canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

function my_keydown(e){
    keypressed=e.keyCode;
    console.log(kepPressed);
    if((keyPressed >=97 && keyPressed<122)|| (keyPressed >65 && keyPressed<90)){
alplhabetkey();
document.getElementById("d1").innerhtml="You pressed Alplhabet Key";
console.log("alplhabetkey");
    }
    }