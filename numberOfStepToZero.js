function numbers(num) {

    let sum = 0;
    let steps = 0;

    while (num !== 0) {
        if (num % 2 === 0) {
            sum = num / 2;
            num = sum;
        } else if (num % 2 !== 0) {
            sum = num - 1;
            num = sum;
        }
        steps++;
    }
    console.log(steps);

}
numbers(num = 14);
numbers(num = 8);
numbers(num = 123);