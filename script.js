// задание 

function num (a, b , c) {
    return (a - b) / c;
}

console.log(num (13, 3, 2));

// задание 2

function num2 (a) {
    return [a ** 3, a ** 2]; 
}

console.log(num2(8));

// задание 3

function num3 (a, b) {
    return [(Math.max(a, b)), (Math.min(a, b))]
}
console.log(num3 (5, 59))

// задание 4

 //Вывод рандомных чисел в массив
let array = []
let max = 30
let min = 10
for(i = 0; i < 7; i++) {
    array.push(Math.floor(Math.random()*(max - min + 1) + min));
}
console.log(array)


let array5 = []
let min3 = prompt('Введите минимальное значение диапазона'); 
let max3 = prompt('Введите максимальное значение диапазона'); 
console.log(min3, max3);

function arr4 () {
    for(i = 0; i < 7; i++) {
        array5.push(Math.floor(Math.random()*(max3 - min3 + 1) + min3));
    }
    return array5;
}

arr4()
console.log(array5);


let array2 = [];
let min2 = prompt('Введите минимальное значение'); 
let max2 = prompt('Введите максимальное значение'); 
function arr2 () {
    for(i = +min2; i <= max2; i++) {
        array2.push(i)
       // console.log(array2);
    }
    return array2
}
arr2 () 

function arr1 () {
    for(i = +min2; i <= max2; i++) {
    if(array2.includes(i) === true) {
        continue
    }
}
}
arr1 ()
console.log(array2);


// задание 5

let i5 = prompt('Введите любое число');
function isEven () {
        if(i5 % 2 === 0) {
            return true;
        } else {
            return false;
    }
}
let evenNumbers = isEven();
console.log(evenNumbers)
isEven ()


// задание 6

let arr6 = [13, 18, 20, 1, 6, 8, 9, 15, 29, 24, 16]
let array6 = []
function arr66 () {
    for(i6 = 0; i6 <= arr6.length; i6++) {
    if(arr6[i6] % 2 === 0) {
        array6.push(arr6[i6])
    } else {
        continue
    }
}   
    console.log(array6)
}
arr66 ()

// задание 7

function task7() {
    for (let i = 1; i <= 8; i++) {
        for (let j = 1; j <= i; j++) {
           
         document.write(i);    
        }
        document.write('<br>');  
    }
    
}
task7()

let str = '';
for (let i = 0; i < 7; i++) {
	str = str + '*';
	document.write(str + '<br>');
}


// задание 10


let sum = 0;
function count(array) {
    let array2 = String(array).split('').map(Number);
    console.log(array2);
    sum = array2[0] + array2[1] + array2[2] + array2[3] + array2[4] + array2[5];
    console.log(sum)
    if(sum > 9) {
        return 
    } /* else {
    count(sum[0] + sum[1])
    }
     */  
}

count ([635416]);