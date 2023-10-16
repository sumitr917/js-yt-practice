# Projects related to DOM

## Project Link
[Click Here] ()


# Solution Code
## project 1

```javascript
console.log("sumit")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## project 2
```javascript
const form = document.querySelector('form')
    form.addEventListener('submit', (e)=>{
        e.preventDefault()

        const height = parseInt(document.querySelector('#height').value)
        const weight = parseInt(document.querySelector('#weight').value)
        const results = document.querySelector('#results')
        const weightGuide = document.querySelector('#weight-guide')
        const underWeight = document.querySelector('#under-weight')
        const overWeight = document.querySelector('#over-weight')
        const normal = document.querySelector('#normal')

        if(height === '' || height < 0 || isNaN(height)){
           results.innerHTML = "Please give a valid height" 
           weightGuide.style.display = 'none' 
        }

        else if(weight === '' || weight < 0 || isNaN(weight)){
           results.innerHTML = "Please give a valid weight"
           weightGuide.style.display = 'none' 
        }
        else{
            const bmi = (weight / ((height*height)/10000)).toFixed(2)
            results.innerHTML = `<span>${bmi}</span>`
            weightGuide.style.display = ''
            if(bmi > 24.9){
                overWeight.style.display = ''
                underWeight.style.display = 'none'
                normal.style.display = 'none'
            }
            else if(bmi >= 18.6 && bmi <= 24.9){
                overWeight.style.display = 'none'
                underWeight.style.display = 'none'
                normal.style.display = ''
            }
            else{
                overWeight.style.display = 'none'
                underWeight.style.display = ''
                normal.style.display = 'none'
            }

        }
    })

```


## project 3
```javascript
const clock = document.getElementById('clock')
    

    setInterval(function(){
        let date = new Date()
        // console.log(date.toLocaleTimeString())
        clock.innerHTML = date.toLocaleTimeString()
    }, 1000)
```


## project 4
```javascript
let randomNum = parseInt((Math.random()*100 + 1))
    const submit = document.querySelector('#subt')
    const userInput = document.querySelector('#guessField')
    const guessSlot = document.querySelector('.guesses')
    const remaining = document.querySelector('.lastResult')
    const lowOrHi = document.querySelector('.lowOrHi')
    const startOver = document.querySelector('.resultParas')


    const p = document.createElement('p')

    let prevGuess = []
    let numGuesses = 1

    let playGame = true

    if(playGame){
        submit.addEventListener('click', function(e){
            e.preventDefault()
            const guess = parseInt(userInput.value)
            console.log(guess)
            validateGuess(guess)
        })
    }


    function validateGuess(guess){
        if(isNaN(guess)){
            alert('Please enter a valid number')
        }
        else if(guess < 1){
            alert('Please enter a number greater than 1')
        }
        else if(guess > 100){
            alert('Please enter a number smaller than 100')
        }
        else{
            prevGuess.push(guess)
            if(numGuesses === 11){
                displayGuess(guess)
                displayMessage(`Game Over. Random number was ${randomNum}`)
                endGame()
            }
            else{
                displayGuess(guess)
                checkGuess(guess)
            }
        }
        
    }


    function checkGuess(guess){
        if(guess === randomNum){
            displayMessage(`You guessed it right!`)
            endGame()
        }else if(guess < randomNum){
            displayMessage(`Number is too low`)
        }
        else if(guess > randomNum){
            displayMessage(`Number is too high`)
        }
    }


    function displayMessage(message){
        lowOrHi.innerHTML = `<h2>${message}</h2>`
    }

    function displayGuess(guess){
        userInput.value = ''
        guessSlot.innerHTML += ` ${guess}`
        numGuesses++
        remaining.innerHTML = `${11 - numGuesses}`
    }

    function newGame(){
        const newGameButton = document.querySelector('#newGame')
        newGameButton.addEventListener('click', function(e){
            randomNum = parseInt((Math.random()*100 + 1))
            prevGuess = []
            numGuesses = 1
            remaining.innerHTML = `${11 - numGuesses}`
            guessSlot.innerHTML = ''
            userInput.removeAttribute('disabled')
            startOver.removeChild(p)
            lowOrHi.innerHTML = ''

            playGame = true
        })
    }

    function endGame(){
        userInput.value = ''
        userInput.setAttribute('disabled', '')
        p.classList.add('button')
        p.innerHTML = `<h2 id = "newGame">Start New Game</h2>`
        startOver.appendChild(p)
        playGame = false
        newGame()
    }
```


## project 5

```javascript
const insert = document.querySelector('#insert')

    window.addEventListener('keydown', (e) => {
        insert.innerHTML = `
            <div class="color">
                <table>
                <tr>
                    <th>Key</th>
                    <th>Keycode</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${e.key === " " ? "Space" : e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
                </table>
            </div>
        `
    })
```