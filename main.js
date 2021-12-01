let num = 266219;

let arrayNum = String(num).split('');

let result = arrayNum.reduce(function (sum,current) {
    return sum * current;
});

let result3d = result ** 3;
console.log(String(result3d).slice(0,2));



