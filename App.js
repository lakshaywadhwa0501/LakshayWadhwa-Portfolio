var button=document.querySelector("#ClickMe");
var namein=document.querySelector("#nameinput");

button.addEventListener("click",function nameout(){
    console.log("Clicked!");
    Output1.innerText="Welcome "+namein.value+"!";
})
var Ans1 = document.querySelector("#Ans1");
var Abs2 = document.querySelector("#Ans2");
var Ans3 = document.querySelector("#Ans3");
var Ans4 = document.querySelector("#Ans4");
var Ans5 = document.querySelector("#Ans5");
var submit=document.querySelector("#submitncheck");
submit.addEventListener("click",function outputshow(){
    var score=0;
    if(Ans1.value==='Black')
    score++;
    
    if(Ans2.value==='Savoury')
    score++;
    
    if(Ans3.value==='Pizza')
    score++;
    
    if(Ans4.value==='Hindi')
    score++;
    
    if(Ans5.value==='Mountains')
    score++;
     
    if(score>4)
    {
    Output.innerText = namein.value+", Your Final Score is: " + score + "/5 \n"+"Yes, You Know Pretty Much About Me! ❤️";
    }
    else
    {
    Output.innerText = namein.value+", Your Final Score is: " + score + "/5 \n"+"You need to know me more 😅";
    }
})
