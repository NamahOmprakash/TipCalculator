let btn1 = document.getElementById("rock");
let btn2 = document.getElementById("paper");
let btn3 = document.getElementById("scissors");
let results = document.getElementById("result");
let score = document.getElementById("user-score");
let computerscore = document.getElementById("computer-score");
let drawscore = document.getElementById("draw-score")
let ps = 0;
let cs = 0;
let ds = 0;
function func1(){
    let random = Math.random()
    if (random>0.6){
        ps++
        score.innerText=`${ps}`;
    }else if(random<=0.6 && random>=0.3){
        cs++
        computerscore.innerText=`${cs}`
    }else if(random<0.3){
        ds++
        drawscore.innerText=`${ds}`
    }
}
function func2(){
    let random = Math.random()
    if (random>0.6){
        ps++
        score.innerText=`${ps}`;
    }else if(random<=0.6 && random>=0.3){
        cs++
        computerscore.innerText=`${cs}`
    }else if(random<0.3){
        ds++
        drawscore.innerText=`${ds}`
    }
}
function func3(){
    let random = Math.random()
    if (random>0.6){
        ps++
        score.innerText=`${ps}`;
    }else if(random<=0.6 && random>=0.3){
        cs++
        computerscore.innerText=`${cs}`
    }else if(random<0.3){
        ds++
        drawscore.innerText=`${ds}`
    }
}