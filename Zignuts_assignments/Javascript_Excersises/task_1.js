// Task1: NeedtocreateJavaScript functions for a sum of numbers in the string (Example like “foo8bar8cat2tc2”)

const str = 'foo8bar8cat2tc2';
var s = 0;

for (let i of str){
    if(i >= '0' && i <= '9'){
        s += Number(i);
    }
}

console.log(s);