var button=document.querySelector("#ClickMe");
var namein=document.querySelector("#nameinput");
var u=namein.value;
var serverURL="https://PortfolioServer.lakshaywadhwa.repl.co/translate/yoda.json"

button.addEventListener("click",function nameout(){
    console.log("Clicked!");
    Output1.innerText="Welcome "+namein.value+"!\n Let's Scroll Down 👇🏻";
})
var Ans1 = document.querySelector("#Ans1");
var Ans2 = document.querySelector("#Ans2");
var Ans3 = document.querySelector("#Ans3");
var Ans4 = document.querySelector("#Ans4");
var Ans5 = document.querySelector("#Ans5");
var submit=document.querySelector("#submitncheck");
function urlGenerator(i){
    return serverURL+"?"+"text=Game:"+i;
}

submit.addEventListener("click",function outputshow(){
    var score=0;
    if((Ans1.value.trim())==='Black')
    score++;
    
    if((Ans2.value.trim())==='Savoury')
    score++;
    
    if((Ans3.value.trim())==='Pizza')
    score++;
    
    if((Ans4.value.trim())==='Hindi')
    score++;
    
    if((Ans5.value.trim())==='Mountains')
    score++;
    
    document.getElementById("Ans1").style.color = "green";
    document.getElementById("Ans2").style.color = "green";
    document.getElementById("Ans3").style.color = "green";
    document.getElementById("Ans4").style.color = "green";
    document.getElementById("Ans5").style.color = "green";
    Ans1.value="Correct Ans is: Black";
    Ans2.value="Correct Ans is: Savoury";
    Ans3.value="Correct Ans is: Pizza";
    Ans4.value="Correct Ans is: Hindi";
    Ans5.value="Correct Ans is: Mountains";

    if(score>=4)
    {
    Output.innerText = " Your Final Score is: " + score + "/5 \n"+"Yes, You Know Pretty Much About Me! ❤️\n Thanks for playing! "+namein.value;
    }
    else
    {
    Output.innerText = " Your Final Score is: " + score + "/5 \n"+"You need to know me more 😅\n Thanks for playing! "+namein.value;
    }


    fetch(urlGenerator(u))
    .then(response => response.json())
    .then(json => console.log(json))
    
    fetch(urlGenerator(score))
    .then(response => response.json())
    .then(json => console.log(json))
    console.log("-------------------")

})

