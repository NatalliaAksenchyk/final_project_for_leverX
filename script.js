'use strict';
// console.log('Hello JS');

// console.log('test:',test);
// var test = 1;
// console.log('test:',test);


// //console.log('test_1 - A:', test_1);
// //console.log('test_2 - B:', test_2);

// const test_1 = 10;
// let test_2 = 20;

// console.log('test_1 - A:', test_1);
// console.log('test_2 - B:', test_2);
// const wage = 200;
//console.log('typeof wage:', typeof wage);

//let maxSafeNumber = Number.MAX_SAFE_INTEGER;
// console.log('maxSafeNumber:', maxSafeNumber);


// const w = 200;
// const e = 2;
// console.log(w+e);
// console.log(w/e);
// console.log(w-e);

// const d = Math.pow(2, 3);
// console.log('Look there:', d);

// const text = 'My name is';
// const my_name = 'Natallia';
// const surname = 'Aksenchyk;'
// let result = text + my_name;
// console.log('look:', result);
// let fulName = `My name is ${my_name} ${surname}`;
// console.log('look:', fulName);

// let isMonday = true;
// isMonday = false;
// console.log('isMonday:', isMonday);
// console.log('! isMonday:', ! isMonday);
// console.log('isMonday TYPE:', typeof isMonday);

// let res = {};
// console.log(res);

// function sayHello(name) {
//     console.log (`Hello, ${name}!`);
// }

// sayHello ('Mike');
// sayHello ('Viktor');

// const greeting = function(name) {
//     console.log (`Hello, ${name}!`);
// }

// greeting ('Mike');
// greeting ('Viktor');

// let a_name = promt('Как твое имя?', '');
// alert(a_name);




// const person = {
// name: 'Katya',
// age: 12,
// isStudent: true
// };
// console.log(person.name);
// console.log(person['age']);

// console.log('1:', person);
// person.name = Natallia;
// console.log('2:', person);

// const arr = ['apple', 3, true];
// console.log('arr', arr);

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr.length);

// function sayHello() {
//     console.log ('sayHello function');
// }
// sayHello();

// function sayBye(name,surname) {
//     console.log (`sayBye ${name} ${surname}`);
// }
// sayBye('Natallia', 'Aksenchyk');

// const greeting = function() {
//     console.log ('');
// }

// greeting ();


// const greeting = function(name) {
//     console.log (`Hello, ${name}`);
// }

// greeting ('Natallia');


// let a_name = promt('Как твое имя?', '');
// alert(a_name);
// let age = 23;
// console.log(typeof String(age));

// let age = 27;
// let agePrase = 'My age'+age;
// console.log(typeof agePrase, agePrase);

// const strBool = 'String' + true;
// console.log()


// let str = "29";
// let text = "text";
// let bool_1 = true;
// let bool_2 = false;

// console.log(str);
// console.log(typeof Number(str));

// console.log(text);
// console.log(typeof Number(text));
// console.log(Number(text));
// console.log(Boolean(text));

// console.log(bool_1);
// console.log(typeof Number(bool_1));

// console.log(bool_2);
// console.log(typeof Number(bool_2));

// console.log(Boolean(""));
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(false));

// // alert('cfvbhjn');
// const name = prompt('What is your name?','Natallia');
// alert(name);

// const eeeuu = confirm('fffg?');
// alert(eeeuu);

// let res = 1;
// res = -res;
// console.log(res - 5);

// const res = 13 % 4;
// const dfg = 33*2;
// console.log(res);
// console.log(dfg);

// const age = 3;
// if (age < 5) {
//     alert("how are u?");
// } else {
//     alert("hgj");
// }







// Homework

// const count = 13;
// if (count < 10 || count > 25) {
//     console.log(true);
// }   else{
//     console.log(false);
// } 


// let password = prompt('You password?');
// let currentPassword = 'natasha54321';
// if (password === currentPassword) {
//     alert('Пароль верный');
// }   else if (password == '' || password == null) {
//     alert('Отменено'); 
// }   else{
//     alert('Пароль не верный');
// }  



// let value = prompt ('name JS?');
// if (value == 'ECMAScript') {
//     alert('Верно');
// } else{
//     alert('Не знаете? "ECMAScript"');
// }


// let value = prompt('Число');
// if (value > 0) {
//     alert('1');
// } else if (value < 0) {
//     alert('-1');
// } else if (value == 0) {
//     alert('0');
// }


// result = (a + b < 4) ? 'Мало' : 'Много';

// message = (login == 'Сотрудник') ? 'Привет':
// (login == 'Дипектор') ? 'Здлпавствуйте':
// (login == '') ? 'Нет логина':
// '';


// let age = 91;
// if (age >= 14 && age <= 90) {
//     console.log('true');
// } else {
//     console.log('false');
// }


// let age = 17;
// if (!(age >= 14 && age <= 90)) {
//     console.log('true');
// } else {
//     console.log('false');
// }

// let age = 17;
// if (age < 14 || age > 90) {
//     console.log('true');
// } else {
//     console.log('false');
// }


// let a = 10;
// let b = a++;
// console.log(a);
// console.log(b);


// let c = 10;
// let d = ++c;
// console.log(c);
// console.log(d);

// let i = 0
// while (i < 3) {
//     alert( i );
//     i++;
// }    

// let s = 0;
// do{
//     alert( s );
//     s++;
// } while (s<3);

// for (let a = 0; a < 6; a++) {
//     alert( a );
// }



// let isPrompt = true;
// while (isPrompt) {
//     const pr = prompt('enter some number');

//     if (!pr) {
//         if (typeof pr === 'object') {
//             alert('canceled');
//         } else {
//             alert('U didnt enter any number');
//         }
//         break;
//     }
//     isPrompt = !isPrompt;
//     console.log('prompt is text:', pr);
// }


// while (true) {
//     const pr = prompt('enter some number');

//     if (!pr) {
//         console.log("there is no number");
//         break;
//     } else if (!(pr % 2)) {
//         console.log("odd number");
//         continue;
//     } else {
//         console.log("even number");
//     }
//     console.log("FINISH");
// }




// function sayBye(name,surname) {
//     console.log (`sayBye ${name} ${surname}`);
// }
// sayBye('Natallia', 'Aksenchyk');


// const login = confirm('Wanna to login?');
// if (login === true)  {
//     let youLogin = prompt('You login?');
//     if (youLogin === 'natasha') {
//         alert('Login correct'); 
//     }   else if (youLogin === null) {
//         const youSure = confirm('Are you sure?');
//         if (youSure === false) {
//             let youLogin = prompt('You login?'); 
//             if (youLogin === 'natasha') {
//                 alert('Login correct'); 
//             }   else if (youLogin === '') {
//                 alert('Check the login, one more time');
//             }   else if (youLogin === null) {
//                 alert('Bye!');
//             }   else {
//                 alert('Login is not correct');
//             } 
//         }   else {
//             alert('See you next time');
//         }
//     }   else if (youLogin === '') {
//         alert('Check the login, one more time');
//     }   else {
//         alert('Login is not correct');
//     }    
// }  else {
//     let youReasons = prompt('You Reasons? \n 1 \n 2 \n 3');
//     if (youReasons === '1' || youReasons === '2' || youReasons === '3') {
//         alert('Thank you');
//     }   else if (youReasons === null) {
//         alert('Bye!');
//     }   else if (youReasons === '') {
//         alert('Bye!');
//     }   else {
//         alert('Bye!');
//     }  
// }






// 


















function breakFunction(x) {
    if (x === 'natasha') {
        alert('Login correct');
    } else if (x === '') {
        alert('Check the login, one more time');
    } else {
        alert('Login is not correct');
    } 
}

const login = confirm('Wanna to login?');
if (login === true) {
	let youLogin = prompt('You login?');
	if(youLogin != null) {
		breakFunction(youLogin);
	} else {
		const youSure = confirm('Are you sure?');
		while (true) {
			if (youSure === false) {
                let youLogin = prompt('You login?');
                if(youLogin != null) {
                    breakFunction(youLogin);
                    break;
                } else {
                    const youSure = confirm('Are you sure?');
                }    
			} else {
				alert('See you next time');
				break;
			}
		}
	}
} else {
	let youReasons = prompt('You Reasons? \n 1 \n 2 \n 3');
	if (youReasons === '1' || youReasons === '2' || youReasons === '3') {
		alert('Thank you');
	} else if (youReasons === null) {
		alert('Bye!');
	} else if (youReasons === '') {
		alert('Bye!');
	} else {
		alert('Bye!');
	}
}








// let login = prompt('You login?');
// if (login === 'natasha') {
//     alert('Логин верный');
// }   else if (login == '' || login == null) {
//     alert('Отменено'); 
// }   else{
//     alert('Логин не верный');
// } 


// let login = true;
// // let yes = true;
// // let no = false;
// while(login) {
//     const pr = prompt('You login?');
//     if(pr){
//         alert(pr);
//     }
// }
// if (no = 'reasons?') {
//     alert(no);
// } else('1.gnkll');