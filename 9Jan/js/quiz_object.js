question1 = {
    id: 1,
    title: "Command to copy text is ?",
    options: ['ctrl+c', 'ctrl+v', 'ctrl+z', 'ctrl+x'],
    answer: 'ctrl+c',
    checkAnswer: function (optionSelected) {
        if (this.answer == optionSelected) {
            return true;
        } else {
            return false;
        }
    }
}
question2 = {
    id: 2,
    title: "Command to paste text is ?",
    options: ['ctrl+z', 'ctrl+v', 'ctrl+c', 'ctrl+x'],
    answer: 'ctrl+v',
    checkAnswer: function (optionSelected) {
        if (this.answer == optionSelected) {
            return true;
        } else {
            return false;
        }
    }
}
question3 = {
    id: 3,
    title: "Full form of HTML ?",
    options: ['Hyper TT Protocol', 'Hyper Text MarkUp Language', 'Hype Tranfer Mail langugae', 'None'],
    answer: 'Hyper Text MarkUp Language',
    checkAnswer: function (optionSelected) {
        if (this.answer == optionSelected) {
            return true;
        } else {
            return false;
        }
    }
}
question4 = {
    id: 4,
    title: "Which of these are correct ?",
    options: ['TCP', 'UDP', 'Both', 'LLP'],
    answer: 'Both',
    checkAnswer: function (optionSelected) {
        if (this.answer == optionSelected) {
            return true;
        } else {
            return false;
        }
    }
}
question5 = {
    id: 5,
    title: "Which of these is not a clothing brand ?",
    options: ['adidas', 'nike', 'dell', 'roadster'],
    answer: 'dell',
    checkAnswer: function (optionSelected) {
        if (this.answer == optionSelected) {
            return true;
        } else {
            return false;
        }
    }
}


var questions = [question1, question2, question3, question4, question5];
var displayQuestion = document.getElementById('question');
var displayOptions = document.getElementById('options');
var currentQuestion = parseInt(sessionStorage.getItem('currentQuestion'));
console.log("Session at start:=" + currentQuestion);
var optionValues;
var correctAnswers = parseInt(sessionStorage.getItem('correctAnswers'));
console.log(correctAnswers);
if (isNaN(correctAnswers)) {
    correctAnswers = 0;
}
console.log(correctAnswers);
if (isNaN(currentQuestion)) {
    currentQuestion = 0;
    displayQuestion.innerHTML = questions[currentQuestion].title;
    fillOptions(currentQuestion);
} else {
    displayQuestion.innerHTML = questions[currentQuestion].title;
    fillOptions(currentQuestion);
}


function fillOptions() {
    optionValues = questions[currentQuestion].options;
    for (var i = 0; i < optionValues.length; i++) {
        var o = document.createElement("input");
        var lbl = document.createElement("lable");
        var text = document.createTextNode(optionValues[i]);
        o.setAttribute("type", "radio");
        o.setAttribute("value", optionValues[i]);
        o.setAttribute("name", questions[currentQuestion].id);
        lbl.appendChild(text);
        displayOptions.appendChild(o);
        displayOptions.appendChild(lbl);
    }
}


function btnSubmit() {

    if ((questions.length - 1) == currentQuestion) {
        selectedOption();
        console.log(correctAnswers);
        alert("Finished");
        document.getElementById('btnSubmit').hidden = true;
        displayQuestion.hidden = true;
        displayOptions.hidden = true;
        document.getElementById("result").innerHTML = "Your Score is: " + correctAnswers;
        console.log("Session at End:=" + currentQuestion);
        console.log("Correct Answers are:" + sessionStorage.getItem('correctAnswers'));

    } else {
        selectedOption();
        console.log(correctAnswers);
        currentQuestion += 1;
        sessionStorage.setItem('currentQuestion', currentQuestion);
        displayQuestion.innerHTML = questions[currentQuestion].title;
        displayOptions.innerHTML = "";
        fillOptions(currentQuestion);
    }
}

function selectedOption() {
    for (var i = 0; i < 4; i++) {
        var radioValue = document.getElementsByName(questions[currentQuestion].id);
        if (radioValue[i].checked) {
            if (questions[currentQuestion].checkAnswer(radioValue[i].value)) {
                correctAnswers += 1;
                sessionStorage.setItem('correctAnswers', correctAnswers);
            }
        }
    }
}

function btnReset() {
    sessionStorage.setItem('currentQuestion', 0);
    sessionStorage.setItem('correctAnswers', 0);
    location.reload();
}

if (sessionStorage.getItem('currentQuestion') == 4) {
    displayQuestion.hidden = true;
    displayOptions.hidden = true;
    document.getElementById('btnSubmit').hidden = true;
    document.getElementById("result").innerHTML = "Your Score is: " + correctAnswers;
    console.log("Session at End:=" + currentQuestion);
    console.log("Correct Answers are:" + sessionStorage.getItem('correctAnswers'));
}
