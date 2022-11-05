function richestCustomer(accounts) {

    let customerOne = 0;
    let customerTwo = 0;

    for (let i = 0; i < accounts[0].length; i++) {
        customerOne += accounts[0][i];
    }
    for (let y = 0; y < accounts[1].length; y++) {
        customerTwo += accounts[1][y];
    }

    if (customerOne > customerTwo) {
        console.log(`The 1st customer is richest with a wealth of ${customerOne}`);
    } else if (customerTwo > customerOne) {
        console.log(`The 2nd customer is the richest with a wealth of ${customerTwo}`);
    } else {
        console.log(`Both customers are consider the richest with a wealth of ${customerOne}`);
    }

}
richestCustomer(accounts = [[1, 2, 3], [3, 2, 1]]);
richestCustomer(accounts = [[2, 8, 7], [7, 1, 3], [1, 9, 5]]);
richestCustomer(accounts = [[1, 5], [7, 3], [3, 5]]);