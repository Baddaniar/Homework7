//дз1 Функция вывод площади прямоугольнка
function ploshad(a, b = a){
    return console.log(`Площадь равна ${a * b}`)
}
//дз 2 Функция поиска совершенного числа в диапазоне
//Функция умножения значений массива в одно число
let array = [1,23,4,5,6,7,8,9]
function arrsum(arr){
    let result = 0;
    for(let i = 0; i < arr.length; i++){
        result += arr[i]
    }
    return result
}
//Функция определния совершенного числа
function isperfect(num){
    let summ = [0];
    for(let i = 1; i < num; i++){
        if(num % i === 0){
            summ.push(i)
        }
    };
    if(arrsum(summ) == num){
        return true
    }else{
        return false
    }
}
//Функция определния совершенного числа в массива
function isPerfectRange(firstnumb,secondsunm){
    for(let i = firstnumb; i <= secondsunm; i++){
        if(isperfect(i) == true){
            console.log(`Число ${i} совершенное`)
        }
    }
}