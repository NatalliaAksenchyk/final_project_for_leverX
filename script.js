'use strict';

let storage = new Map();      

function noSelectedCheckboxes(answers) {    // unanswered questions
  let answersNum = Array.from(answers).map(it => it.querySelectorAll("input[type='checkbox']:checked"))
  .filter(it => it.length == 0).length;
  return answersNum > 0;
}

function submitButton() {
  let count = document.getElementsByClassName('block').length; 
  let answers = document.querySelectorAll('.block'); 
  let score = 0; 
  let rightAnswers = [["checkbox1", "checkbox4"], ["checkbox1", "checkbox3", "checkbox4"],["checkbox1", "checkbox2"], ["checkbox2", "checkbox3"], ["checkbox2", "checkbox4"]];
  let questionIncorrectAnswer= [];
  Array.from(storage.values()).map(it => it.correctAnswers).map(it => rightAnswers.push(it.map(e => 'checkbox' + e))); 
  if(noSelectedCheckboxes(answers)) {
    alert('Все вопросы долждны иметь хотя бы один выбранный вариант ответа. Проверте правильность заполнения');
    return;
  }
  for (let i = 0; i < count; i++) {
    let chosenAnswer = answers[i].querySelectorAll("input[type='checkbox']:checked"); 
    let arrChosenAnswer = Array.from(chosenAnswer).map(it => it.className);
    let isRightAnswer = true;
    for(let j=0; j<rightAnswers[i].length; j++) {
      let rightAnswersNumber =  rightAnswers[i][j];
      if(rightAnswers[i].length !== arrChosenAnswer.length) {
        isRightAnswer= false;
      } else if (!arrChosenAnswer.includes(rightAnswersNumber)) {  //checking for being in an array
        isRightAnswer = false;
      }
    } 
    if(isRightAnswer){
      score++;          //adding the number of correct answers
    } else {
      addIncorrectQuestion(questionIncorrectAnswer, i);
    }
  }
  if(questionIncorrectAnswer.length == 0) {
    alert("Ваш результат " + score + " из " + count + ". Вы молодец!");
  } else {
    alert("Вы неправильно ответили на вопросы:" + "\n" + "\n" + questionIncorrectAnswer + "\n" + "\n" + "Ваш результат " + score + " из " + count);
  }
}

function addIncorrectQuestion(questionIncorrectAnswer, i) {   //correction for default questions
  if(i == 0) {
    questionIncorrectAnswer.push('Что из перечисленного не яляется языком программирования?');
  } else if(i == 1) {
    questionIncorrectAnswer.push('Какие из перечисленных видов тестирования могут быть автоматизированы?');
  } else if(i == 2) {
    questionIncorrectAnswer.push('Какая (какие) из следующих конструкий используется (используются) для ветвления?');
  } else if(i == 3) {
    questionIncorrectAnswer.push('Какого (каких) метода (методов) тестирования не существует?');
  } else if(i == 4) {
    questionIncorrectAnswer.push('Выберите типы алгоритмов, которых не существует');
  }
  else {
    questionIncorrectAnswer.push(Array.from(storage.keys())[i-5]);
  }
}

function addQuestion() {
  let question = prompt('Введите текст вопроса:');
  if(question){
    storage.set(question, { answers: [], correctAnswers: [] });
    let form = document.getElementById('test');
    let questionBlock = document.createElement('div');
    questionBlock.classList.add("block");
    form.appendChild(questionBlock);
    let questionElem = document.createElement('p');
    questionBlock.appendChild(questionElem);
    questionElem.innerHTML = `${question}`;
    if(!addAnswer(question,questionBlock)) {
      storage.delete(question);   //deleting the question from the repository
      questionBlock.remove();   //delete the question block if the user has not entered an answer option
      addQuestion();
    }
  } else {
    alert('Вы не ввели текст вопроса. Попробуйте добавить вопрос заново');
    addQuestion();
  }
}

function addAnswer(question, questionBlock) {
  let i = 1;
  let divAnswers = document.createElement('div');
  while(i <= 4){
    let answer = prompt(`Введите текст ${i} варианта ответа:`);
    if(answer) {  
      storage.get(question).answers.push(answer);
      questionBlock.appendChild(divAnswers);
      let label = document.createElement('label');
      let checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.classList.add("checkbox" + i);
      label.innerHTML = `${answer}`;
      divAnswers.appendChild(checkbox);
      divAnswers.appendChild(label);
      let br = document.createElement('br');
      divAnswers.appendChild(br);
      i++;
    } else {
      alert(`Вы не ввели текст ${i} варианта ответа. Попробуйте ввести вопрос еще раз`);
      return false;
    } 
  }  
  return addAnswerNumbers(question);
}  

function addAnswerNumbers(question) {
  let number = prompt('Введите номера правильных ответов через запятую. Нумерация начинается с 1');
  if(!number) {
    alert("Вы не ввели правильные варианты ответов, попробуйте ввести вопрос заново");
    return false;
  };
  let patt = new RegExp("^[1-4,]+$");  //regular expression
  let res = patt.test(number);
  if(res) {
    let correctAnswers = number.split(',');
    storage.get(question).correctAnswers = correctAnswers;
    return true;
  } else {
    alert("Поле может содержать только уникальные цифры 1, 2, 3, 4, разделенные запятой. Попробуйте ввести номера правильных ответов заново");
    addAnswerNumbers(question);
    return true;
  } 
}

function startTest() {
  document.getElementById("add").disabled="disabled";
  document.getElementById("start").disabled="disabled";
  document.getElementById("test").style.display = 'block';
  document.getElementById("submit").style.display = "block"; 
}












