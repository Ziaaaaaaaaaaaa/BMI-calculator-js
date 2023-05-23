// let output1 = "you are skinny"
// let output2 = "you are fat bitch"
// let output3 = "your mom"
// let weight = ""
// let height = ""
// let ope

// let button = document.querySelector('#btn-calculator');
// let answer = document.querySelector('#')

let button = document.querySelector('#calc-btn');
button.addEventListener('click', (e)=> {
    e.preventDefault();
    let height = parseInt(document.getElementById('height').value);
    let weight = parseInt(document.getElementById('weight').value);
    let answer = (weight / ((height*height) /10000)).toFixed(2);
    console.log(answer)
    let result = document.getElementById('result');
    let resultTest = document.getElementById('result2')
    result.innerHTML = answer

     if (answer < 18.5) {
        resultTest.innerText = 'underweight'
     } else if( answer < 24.9) {
        resultTest.innerText = 'healthy weight'
     }
     else if ( answer < 29){
        resultTest.innerText = 'overweight'
     }
     else if (answer > 30.0) {
        resultTest.innerText = 'obese'
     }
})
