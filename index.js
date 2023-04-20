let computerNumber 
let userNumbers = []
let attempts = 0
let maxguesses = 10 

function newGame(){
    window.location.reload()
}
document.getElementById

function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
    console.log(computerNumber)
 }
    function compareNumbers(){
    const userNumber = Number(document.getElementById('inputBox').value) 
    userNumbers.push(' ' + userNumber)
    document.getElementById('guesses').innerHTML = userNumbers
    
        if (attempts < maxguesses ){
            if(userNumber > computerNumber){
                document.getElementById('textOutput').innerHTML = 'Seu numero esta muito alto'
                document.getElementById('inputBox').value = ' '
                attempts++
                document.getElementById('attempts').innerHTML = attempts
            }
            else if(userNumber < computerNumber){
                document.getElementById('textOutput').innerHTML = 'Seu numero esta muito baixo'
                document.getElementById('inputBox').value = ' '
                attempts++
                document.getElementById('attempts').innerHTML = attempts
            }
            else{
                document.getElementById('textOutput').innerHTML = 'PARABNES!! VOCE ACERTOU'
                document.getElementById('inputBox').setAttribute('Readonly', 'Readonly') 
            }
    }
    else{
        document.getElementById('textOutput').innerHTML = 'VOCE PERDEU,' +'O NUMERO ERA '+ computerNumber
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly') 
    }
    if (userNumbers >100){
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
        document.getElementById('textOutput').innerHTML = 'VOCE COLOCU UM NUMERO MAIOR QUE 100,'+' POR FAVOR RENICIE O JOGO, '+'O NUMERO ERA '+ computerNumber
    }else{}

}