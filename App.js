var BtnName = document.querySelector("#ClickMe");
var name = document.querySelector("#Text");
var Submit = document.querySelector("#submitgame");
var Ans1 = document.querySelector("#Ans1");
var Abs2 = document.querySelector("#Ans2");
var Ans3 = document.querySelector("#Ans3");
var Ans4 = document.querySelector("#Ans4");
var Ans5 = document.querySelector("#Ans5");
BtnName.addEventListener("click",Name());
Submit.addEventListener("click", Game());

function Name
{
    Output1.innerText(name);
}

function Game()
{
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

Output.innerText = name+", Your Final Score is: " + score + "/5";

if(score>4)
{
Output.innerText = "Yes, You Know about Me Pretty Much! ❤️";
}
else
{
Output.innerText = "You need to know me more 😅";
}

}






