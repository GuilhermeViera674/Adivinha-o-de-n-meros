let computerNumber
let userNumbers = []
let attempts = 0
let maxGuesses = 10

function newGame(){
   window.location.reload()
}

function init(){
   computerNumber = Math.floor(Math.random() * 100 + 1)
   console.log(computerNumber)
}

function compareNumbers(){
   
   const userNumber = Number(document.getElementById('inputBox').value)
   userNumbers.push(' ' + userNumber)
   document.getElementById('guesses').innerHTML = userNumbers 

   if (attempts < maxGuesses){
      if (userNumber > computerNumber){
         document.getElementById('dica').innerHTML = ' Maior que o sorteado'
         document.getElementById('inputBox').value = ''
         attempts++
         document.getElementById('attempts').innerHTML = attempts
      }
      else if (userNumber < computerNumber){
         document.getElementById('dica').innerHTML = ' Menor que o sorteado'
         document.getElementById('inputBox').value = ''
         attempts++
         document.getElementById('attempts').innerHTML = attempts
      }
      else {
         document.getElementById('dica').innerHTML = ' Parabens, você acertou!'
         attempts++
         document.getElementById('attempts').innerHTML = attempts
         document.getElementById('inputBox').setAttribute('Readonly', 'Readonly' ) 
         
      }
   }  

   else {
      document.getElementById('dica').innerHTML = ' GAME OVER! O numero era ' + computerNumber
      document.getElementById('inputBox').setAttribute('Readonly', 'Readonly' ) 
   }


}