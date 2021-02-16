$(document).ready(function(){
    let finalAnswer = 0;
    let percentage = 0;
    $('.form').hide();
    $('#result-statement, #animation, #redo-btn').hide();

    $('button:first').click(function(){
        $('.first-page').hide('slow');
        $('.form').show('slow');
    })

    $('input').click(function(){
        let aaa = this.className;
        if (aaa === 'correct') {
            console.log('true');
            finalAnswer++;
            console.log(finalAnswer);
        }
        return finalAnswer
    })

    function calculateScore(finalAnswer) {
        percentage = (finalAnswer/10)*100;
        console.log(percentage);
        if (percentage >= 70) {
            $('.results').slideDown();
            $('#redo-btn').hide('fast');
            $('#result-statement, #animation').show('slow');
            $('#result-statement').html(`Congratulations! You scored ${percentage}%`);
            $('#bal').animate({bottom: '400px'}, 3000, function(){
                $('#bal').animate({left: '750px'}, 3000);
                $('#bal').animate({left: '250px'}, 3000);
            })
        } else {
            $('.results').slideDown();
            $('#animation').hide('fast');
            $('#result-statement, #redo-btn').show('slow');
            $('#result-statement').html(`Hmmm...you're not there yet. You scored ${percentage}%`);
        }
    }

    $('#submit-btn').click(function(e){
        e.preventDefault();
        $('.form').slideUp('slow');
        calculateScore(finalAnswer);
    })

    $('#redo-btn').click(function(e){
        e.preventDefault();
        $('.results').slideUp();
        $('.form').slideDown('slow').trigger('reset');
        finalAnswer = 0;
        percentage = 0;
    })
})

// const questionPage = document.querySelector('.form');
// const answerOne = document.querySelector('#css');
// const answerTwo = document.querySelector('#html');
// const answerThree = document.querySelector('#all-above');
// const submitButton = document.querySelector('#submit-btn');
// const resultsPage = document.querySelector('.results');
// const resultStatement = document.querySelector('#result-statement');
// const redoButton = document.querySelector('#redo-btn')

// let finalAnswer = 0;

// function getAnswer () {
//     if (answerOne.checked) {
//         finalAnswer +=1;
//     }
//     if (answerTwo.checked) {
//         finalAnswer +=1;
//     }
//     if (answerThree.checked) {
//         finalAnswer +=1;
//     }

//     return finalAnswer;
// }

// const doThis = (e) => {
//     e.preventDefault();
//     getAnswer();
//     questionPage.setAttribute('hidden', true);
//     resultsPage.removeAttribute('hidden');
//     if (finalAnswer === 3) {
//         resultStatement.innerHTML = 'Well done! Your score is ' + finalAnswer + '/3';
//         redoButton.setAttribute('hidden', true);
//         return;
//     } else if (finalAnswer === 2) {
//         redoButton.removeAttribute('hidden');
//         return resultStatement.innerHTML = 'Not bad! Your score is ' + finalAnswer + '/3';
//     }
//     resultStatement.innerHTML = 'That\'s a poor showing! Your score is ' + finalAnswer + '/3';
//     redoButton.removeAttribute('hidden');
// }

// redoButton.onclick = function returnBack() {
//     questionPage.removeAttribute('hidden');
//     questionPage.reset();
//     finalAnswer = 0;
//     resultsPage.setAttribute('hidden', true);
// }

// submitButton.addEventListener('click', doThis);
