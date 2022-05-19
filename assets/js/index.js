//1. Определите переменные со значениями 11, true, "java script", "100" и выведите их в консоль

// let varNum = 11, varBool = true, varStr = 'java script', varStrnum = '100';
// console.log(varNum);
// console.log(varBool);
// console.log(varStr);
// console.log(varStrnum);

//2. Создайте переменные greeting со значением'Hello, ' и userName. Спросите имя пользователя и занесите данное значение в переменную userName. С помощью диалога выведите сообщение с приветствием. Например, 'Hello, Vasya!'.

// let greeting = 'Hello';
// let userName;
// userName = prompt('What is your name?');
// alert(`Hello, ${userName} !`);

//3. Определите в какую четверть часа попадает ввыденное количество минут пользователем (например, 40 минут - 3-я четверть часа)

// let numMin;
// numMin = prompt('Введите количесво минут');
// if (numMin > 0 && numMin < 16){
//     alert('Первая четверть часа');
// } else if (numMin > 15 && numMin < 31){
//     alert('Вторая четверть часа');
// } else if (numMin > 30 && numMin < 46){
//     alert('Третья четверть часа');
// } else if (numMin > 45 && numMin < 61){
//     alert('Четвертая четверть часа');
// } else {
//     alert('Ошибка при вводе')
// }

// 4. Вывод чисел от 10 до 50, которые кратны 5

// let num;
// for (num = 10; num < 51; num+=5) {
//     console.log(num);
// }

// Или так

// let num = 10;
// for(num; num < 51; num++){
//     if(num % 5 == 0){
//         console.log(num);
//     }
// }

// 5. Найти произведение чисел в пределах от lim1 до lim2 (например, если lim1=5 и lim2=12 то это произведение чисел от 5 до 12).

// let lim1, lim2, count = 1;
// lim1 = lim = prompt('Введите первое число');
// lim2 = prompt('Введите второе число (не должно быть меньше или равно первому)');
// if (lim1 < lim2){
//     for(lim1; lim1<=lim2; lim1++){
//         count*=lim1;
//     }
//     alert(`Произведение чисел в пределах от ${lim} до ${lim2} равно ${count}`);
// }else{
//     alert('Проверьте правильность ввода чисел.')
// }

// 6. Задание 5 оформите функцией

// function multiplNumber(lim1, lim2){
//     let count = 1;
//     if (lim1 < lim2){
//         for(lim1; lim1<=lim2; lim1++){
//         count*=lim1;
//         }
//     }else{
//         count = "Провете првильность ввода чисел (первое должно быть меньше второго.)"
//     }
//     return count;
// }
// console.log(multiplNumber(5,12));

// Дополнительное задание

function exerciseOne(){
    let varNum = 11, varBool = true, varStr = 'java script', varStrnum = '100';
    console.log(varNum);
    console.log(varBool);
    console.log(varStr);
    console.log(varStrnum);
}
function exerciseTwo(userName){
    alert(`Hello, ${userName} !`);
}
function exerciseThree(numMin){
    if (numMin > 0 && numMin < 16){
        alert('Первая четверть часа');
    } else if (numMin > 15 && numMin < 31){
        alert('Вторая четверть часа');
    } else if (numMin > 30 && numMin < 46){
        alert('Третья четверть часа');
    } else if (numMin > 45 && numMin < 61){
        alert('Четвертая четверть часа');
    } else {
        alert('Ошибка при вводе')
    }
}
function exerciseFour(){
    let num;
    for (num = 10; num < 51; num+=5) {
        console.log(num);
    }
}
function exerciseFive(lim1, lim2){
    let count = 1, lim = lim1;
    if (lim1 < lim2){
        for(lim1; lim1<=lim2; lim1++){
            count*=lim1;
        }
        alert(`Произведение чисел в пределах от ${lim} до ${lim2} равно ${count}`);
    }else{
        alert('Проверьте правильность ввода чисел.')
    }
}
function exerciseWork(choise){
choise = prompt('Выберите номер задания от 1 до 5');
if (choise == 1){
    exerciseOne();
}else if (choise == 2){
    exerciseTwo(prompt('What is your name?'));
}else if (choise == 3){
    exerciseThree(prompt('Введите колличество минут'));
}else if (choise == 4){
    exerciseFour();
}else if (choise == 5){
    exerciseFive(prompt('Введите первое число'), prompt('Введите второе число'));
}else {
    alert('Ошибка при выборе, поробуйте снова'), exerciseWork();
} 
}
exerciseWork();







