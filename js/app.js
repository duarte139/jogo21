var lettersSelected = 0;
var playerActive = 1;

var playerOne = {
    points: 0,
}
var playerTwo = {
    points: 0,
}

var playeroneD = document.getElementById('player1');
var playertwoD = document.getElementById('player2');
var scores1D = document.getElementById('scores1');
var scores2D = document.getElementById('scores2');
var lettersselectedD = document.getElementById('letters-selected');

function changePlayer(){

    playerActive = (playerActive == 1)? 2 : 1;

    if(playerActive == 1){
        playeroneD.classList.add('active');
        playertwoD.classList.remove('active');
    }else{
        playertwoD.classList.add('active');
        playeroneD.classList.remove('active');
    }
}

function selectletter(event){
    lettersSelected = Math.floor((Math.random() * 13) + 1)

    showletter()
    updateScores ()
    
    //essa função para o evento padrão do onclick
    event = event || window.Event

    if (event.preventDefault) event.preventDefault()
    if (event.returnValue) event.returnValue()
    return false
}
function showletter(){
    if(lettersSelected==0){
        lettersselectedD.style.display = 'none'
    }else{
        var src = "imgs/carts/" + lettersSelected + ".png"
        lettersselectedD.setAttribute('src', src)
        lettersselectedD.style.display = 'block'
    }
}
function updateScores(){

    if(playerActive ==1 ){
        playerOne.points +=lettersSelected
    }else{
        playerTwo.points +=lettersSelected
    }

    scores1D.innerText = playerOne.points
    scores2D.innerText = playerTwo.points
}