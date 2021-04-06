const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const user_move_div = document.getElementById("user-move");
const comp_move_div = document.getElementById("computer-move");
const winner = document.getElementById("winner");
const user_score_div = document.getElementById("user-score");
const comp_score_div = document.getElementById("computer-score");

let user_move;
let comp_move;
let user_score = 0;
let comp_score = 0;

rock_div.addEventListener('click', function(){
    user_move_div.innerHTML = "Rock";
    user_move = "r";
    comp_move = random_comp_move();
    display_comp_choice(comp_move);
    result(user_move, comp_move);
})

paper_div.addEventListener('click', function(){
    user_move_div.innerHTML = "Paper";
    user_move = "p";
    comp_move = random_comp_move();
    display_comp_choice(comp_move);
    result(user_move, comp_move);
})

scissors_div.addEventListener('click', function(){
    user_move_div.innerHTML = "Scissors";
    user_move = "s";
    comp_move = random_comp_move();
    display_comp_choice(comp_move);
    result(user_move, comp_move);
})

function random_comp_move() {
    let rand_num = Math.floor(Math.random() * 3);
    if(rand_num == 0){
        return "r";
    }else if(rand_num == 1){
        return "p";
    }else{
        return "s";
    }
}

function display_comp_choice(comp_choice) {
    if(comp_choice == "r"){
        comp_move_div.innerHTML = "Rock";
    }else if(comp_choice == "p"){
        comp_move_div.innerHTML = "Paper";
    }else{
        comp_move_div.innerHTML = "Scissors";
    }
}

function result(user, comp) {
    let combined_result = user + comp;
    console.log(combined_result);
    switch(combined_result){
        case "rr":
            winner.innerHTML = "Tie";
            user_score_div.innerHTML = user_score;
            comp_score_div.innerHTML = comp_score;
            break;
        case "pp":
            winner.innerHTML = "Tie";
            user_score_div.innerHTML = user_score;
            comp_score_div.innerHTML = comp_score;
            break;
        case "ss":
            winner.innerHTML = "Tie";
            user_score_div.innerHTML = user_score;
            comp_score_div.innerHTML = comp_score;
            break;
        case "rp":
            winner.innerHTML = "Paper covers rock, you LOSE!";
            comp_score++;
            user_score_div.innerHTML = user_score;
            comp_score_div.innerHTML = comp_score;
            break;
        case "rs":
            winner.innerHTML = "Rock smashes scissors, you WIN!";
            user_score++;
            user_score_div.innerHTML = user_score;
            comp_score_div.innerHTML = comp_score;
            break;
        case "pr":
            winner.innerHTML = "Paper covers rock, you WIN!";
            user_score++;
            user_score_div.innerHTML = user_score;
            comp_score_div.innerHTML = comp_score;
            break;     
        case "ps":
            winner.innerHTML = "Scissors cut paper, you LOSE!";
            comp_score++;
            user_score_div.innerHTML = user_score;
            comp_score_div.innerHTML = comp_score;
            break;
        case "sp":
            winner.innerHTML = "Scissors cut paper, you WIN!";
            user_score++;
            user_score_div.innerHTML = user_score;
            comp_score_div.innerHTML = comp_score;
            break;
        case "sr":
            winner.innerHTML = "Rock smashes scissors, you LOSE!";
            comp_score++;
            user_score_div.innerHTML = user_score;
            comp_score_div.innerHTML = comp_score;
            break;  
    }
}