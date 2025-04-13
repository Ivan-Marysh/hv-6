
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}



for (let i = 2; i <= 20; i += 1) {
    if (i % 2 === 1) {
        continue;
    }
    console.log(i);
}





for (let i = 1; i <= 10; i += 1) {
    console.log(`7 x ${i} = ${7 * i}`);
}



const numbers = [1, 3, 5, 7, 2, 4, 6, 8, 9];
let n = 10;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= n) {
        break;
    }
    console.log(numbers[i]);
}




let i = 1;

while (i <= 20) {
    if (i % 3 === 0) {
        i++;
        continue;
    }
    console.log(i);
    i++;
}