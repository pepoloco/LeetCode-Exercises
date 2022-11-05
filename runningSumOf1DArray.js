function runningSumOf1DArray(nums) {

    let total = 0;
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        total = total + nums[i];
        result.push(total);
    }
    console.log(result);

}
runningSumOf1DArray(nums = [1, 2, 3, 4]);