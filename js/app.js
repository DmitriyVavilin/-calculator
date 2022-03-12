let body = document.querySelector('body')

let numberOne = document.createElement('input')
numberOne.setAttribute('type', 'number')

let numberTwo = document.createElement('input')
numberTwo.setAttribute('type', 'number')

let div = document.createElement('div')// Переход на новую строку

let result = document.createElement('p')//Вывод результата

let clear = document.createElement('button')//Кнопка Очистить
clear.innerHTML = 'Сброс'
clear.addEventListener('click', function() {
    result.innerHTML = ''
    numberOne.value = ''
    numberTwo.value = ''
})

let div2 = document.createElement('div')//Переход на новую строку

let plus = document.createElement('button')// Кнопка Плюс +++
plus.innerHTML = '+'
plus.addEventListener('click', function() {
    let numOne = parseInt(numberOne.value)
    let numTwo = parseInt(numberTwo.value)
    let sum = numOne + numTwo

    result.innerHTML = `Ваш результат равен: ${sum}`
})


let minus = document.createElement('button')//Кнопка Минус ---
minus.innerHTML = '-'
minus.addEventListener('click', function() {
    let numOne = numberOne.value
    let numTwo = numberTwo.value
    let sum = numOne - numTwo

    result.innerHTML = `Ваш результат равен: ${sum}`
})


let devide = document.createElement('button')//Кнопка ДЕлить ///
devide.innerHTML = '/'

devide.addEventListener('click', function() {
    let numOne = numberOne.value
    let numTwo = numberTwo.value
    let sum = numOne / numTwo

    result.innerHTML = `Ваш результат равен: ${sum}`
})

let multiply = document.createElement('button')//Кнопка Умножить ***
multiply.innerHTML = '*'
multiply.addEventListener('click', function() {
    let numOne = numberOne.value
    let numTwo = numberTwo.value
    let sum = numOne * numTwo

    result.innerHTML = `Ваш результат равен: ${sum}`
})



body.appendChild(numberOne)
body.appendChild(numberTwo)
body.appendChild(div)
body.appendChild(result)
body.appendChild(clear)
body.appendChild(div2)
body.appendChild(plus)
body.appendChild(minus)
body.appendChild(devide)
body.appendChild(multiply)


//Что я хотел изначально сделать.
//Нажимая на кнопку из  цифр, срабатывает фукникция, которая автоматически выводит цифру в значение input.
//После нажатия на математический оператор, первое число проподает из input и водиться второе число.
// Далее вводим равно и после этого появляеться результ.
// Я не могу написать правильно функции которые могли бы связывать кнопки и input.

//Заключение: Я как нибудь попробую решить эту задачу но не много позже. Если у тебя есть пару свободных минут то можешь накидать пару строк кода.


// let body = document.querySelector('body')

// let input = document.createElement('input')    //Первый input
// numberOne.setAttribute('type', 'number')

//let result = document.createElement('p')        //Вывод результата

// let clear = document.createElement('button')   //Кнопка Очистить
// clear.innerHTML = 'Сброс'

// let buttonZero = document.createElement('button')
// let buttonOne = document.createElement('button')
// let buttonTwo = document.createElement('button')
// let buttonThree = document.createElement('button')
// let buttonFour = document.createElement('button')
// let buttonFive = document.createElement('button')
// let buttonSix = document.createElement('button')
// let buttonSeven = document.createElement('button')
// let buttonEigth = document.createElement('button')
// let buttonNine = document.createElement('button')

// let plus = document.createElement('button')    // Кнопка Плюс +++
// plus.innerHTML = '+'

// let minus = document.createElement('button')    //Кнопка Минус ---
// minus.innerHTML = '-'

// let devide = document.createElement('button')   //Кнопка ДЕлить ///
// devide.innerHTML = '/'

// let multiply = document.createElement('button')  //Кнопка Умножить ***
// multiply.innerHTML = '*'


// let xxx = document.createElement('button')     // Кнопка Посчитать ===
// xxx.innerHTML = 'Посчитать'


