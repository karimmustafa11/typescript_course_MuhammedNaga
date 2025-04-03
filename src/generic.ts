function swap<T>(arg1: T, arg2: T) {
    return [arg2, arg1];
}

let num1 = 10;
let num2 = 20;

console.log(`Before swap: num1 = ${num1}, num2 = ${num2}`);
[num1, num2] = swap(num1, num2);
console.log(`After swap: num1 = ${num1}, num2 = ${num2}`);


let str1 = "Str1";
let str2 = "Str2";

console.log(`Before swap: srt1 = ${str1}, str2 = ${str2}`);
[str1, str2] = swap(str1, str2);
console.log(`After swap: srt1 = $${str1}$$, str2 = $${str2}$$`)