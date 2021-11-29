player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

function addUser(){
        player1name =document.getElementById("player1.input").value;
       player2name=document.getElementById("player2.input").value;
           
           localStorage.setItem("player1name",player1name);
           localStorage.setItem("player2name",player2name);
           
           window.location.replace("game_page.html");
       }
       
       player1name=localStorage.getItem("player1name");
       player2name=localStorage.getItem("player2name");
       
       player1score=0;
       player2score=0;
       
       document.getElementById("player1name").innerHTML=player2name+":";
       document.getElementById("player2name").innerHTML=player2name+":";
       
       document.getElementById("player1score").innerHTML=player1score;
       document.getElementById("player2score").innerHTML=player2score;
       
       document.getElementById("playerquestion").innerHTML="Question Turn - "+ player1name;
       document.getElementById("playeranswer").innerHTML="Answer Turn - "+ player2name;
       
function send() {
number1 = document.getElementById("number1").value;
number2 = document.getElementById("number2").value;
actual_answer = parseInt(number1) * parseInt(number2);
console.log(actual_answer);


    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row =  question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementById("number2").value = "";
}


question_turn = "player1";
answer_turn = "player2";




