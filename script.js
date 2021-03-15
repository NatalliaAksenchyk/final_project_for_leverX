'use strict';


let arr = {};

function register() {
  let nameRegister = document.getElementById("email-register").value;
  let passwordRegister = document.getElementById("password-register").value;
  let repeatPasswordRegister = document.getElementById("repeatpassword-register").value;
  if(passwordRegister ===  repeatPasswordRegister) {
    arr[nameRegister] = passwordRegister;
    localStorage.setItem("arr", JSON.stringify(arr));
    window.location = "value.html";
  }  else {
    alert('Неверный пароль');
  }  
};

function validate() {
  let nameValidate = document.getElementById("username").value;
  let passwordValidate = document.getElementById("password").value;
  arr = JSON.parse(localStorage.getItem("arr"));
  if (passwordValidate === arr[nameValidate]) {
    window.location = "index.html";
  } else {
    alert('Неверный логин или пароль');
  }
}
function validateStar() {
  window.location = "value.html";
  let nameValidate = document.getElementById("username").value;
  let passwordValidate = document.getElementById("password").value;
  arr = JSON.parse(localStorage.getItem("arr"));
  if (passwordValidate === arr[nameValidate]) {
    window.location = "index.html";
  } else {
    alert('Неверный логин или пароль');
  }
}

function notactiv() {
  let nameValidate = document.getElementById("username").value;
  let passwordValidate = document.getElementById("password").value;
  console.log(nameValidate, passwordValidate)
  if(nameValidate == "" || passwordValidate == "") {
    document.getElementById("submit").disabled = true;
  } else {
    document.getElementById("submit").removeAttribute("disabled");
  }
}

function notactivRegister() {
  let nameRegister = document.getElementById("email-register").value;
  let passwordRegister = document.getElementById("password-register").value;
  console.log(nameRegister, passwordRegister)
  if(nameRegister == "" || passwordRegister == "") {
    document.getElementById("submit-register").disabled = true;
  } else {
    document.getElementById("submit-register").removeAttribute("disabled");
  }
}

// function finedBrowser() {

//   let textBrowser = document.getElementById("browser");

//   let userDeviceArray = [
//       {device: 'Android', platform: /Android/},
//       {device: 'iPhone', platform: /iPhone/},
//       {device: 'iPad', platform: /iPad/},
//       {device: 'Symbian', platform: /Symbian/},
//       {device: 'Windows Phone', platform: /Windows Phone/},
//       {device: 'Tablet OS', platform: /Tablet OS/},
//       {device: 'Linux', platform: /Linux/},
//       {device: 'Windows', platform: /Windows NT/},
//       {device: 'Macintosh', platform: /Macintosh/}
//   ];

//   let platform = navigator.userAgent;

//  function getPlatform() {
//       for (let i in userDeviceArray) {
//           if (userDeviceArray[i].platform.test(platform)) {
//               return 'Вход выполнен с ' + userDeviceArray[i].device;
//           }
//       }
//       return 'Неизвестная' + platform;
//   }

//   textBrowser.innerHTML = getPlatform();
// }

// finedBrowser();

const delay = ms => {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
};

async function asyncFunc() {
  try {
    await delay(1000);
    const data = await fetch("https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json");
    const result = await data.json();
    let female = result.filter(item => item.gender);
    let woman = document.getElementById("woman");
    woman.innerHTML = "Количество женщин: " + female.length;
    let male = result.filter(item => item.gender);
    let man = document.getElementById("man");
    man.innerHTML = "Количество мужчин: " + male.length;
    let dataDoc = document.getElementById("1");
    let dataDoc2 = document.getElementById("2");
    let dataDoc3 = document.getElementById("3");
    let dataDoc4 = document.getElementById("4");
    let dataDoc5 = document.getElementById("5");
    let dataDoc6 = document.getElementById("6");
    result.forEach((element) => {
        let item = `<p>${element.name}</p>`;
        let item2 = `<p>${element.company}</p>`;
        let item3 = `<p>${element.email}</p>`;
        let item4 = `<p>${element.phone}</p>`;
        let item5 = `<p>${element.balance}</p>`;
        let item6 = `<p>${element.registered}</p>`;
        if (!element.isActive) {
          item = `<p class = "marked">${element.name}</p>`;
          item2 = `<p class = "marked2">${element.company}</p>`;
          item3 = `<p class = "marked3">${element.email}</p>`;
          item4 = `<p class = "marked4">${element.phone}</p>`;
          item5 = `<p class = "marked5">${element.balance}</p>`;
          item6 = `<p class = "marked6">${element.registered}</p>`;
        }
        dataDoc.innerHTML += item;
        dataDoc2.innerHTML += item2;
        dataDoc3.innerHTML += item3;
        dataDoc4.innerHTML += item4;
        dataDoc5.innerHTML += item5;
        dataDoc6.innerHTML += item6;
      });
  } catch (error) {
    console.log("Hello from catch");
  } finally {
    let element = document.getElementsByClassName("marked");
    let element2 = document.getElementsByClassName("marked2");
    let element3 = document.getElementsByClassName("marked3");
    let element4 = document.getElementsByClassName("marked4");
    let element5 = document.getElementsByClassName("marked5");
    let element6 = document.getElementsByClassName("marked6");
    for(let i=0; i < element.length; i++) {
    element[i].style.backgroundColor = "gray";
    element2[i].style.backgroundColor = "gray";
    element3[i].style.backgroundColor = "gray";
    element4[i].style.backgroundColor = "gray";
    element5[i].style.backgroundColor = "gray";
    element6[i].style.backgroundColor = "gray";
    }
  }
}
asyncFunc();



