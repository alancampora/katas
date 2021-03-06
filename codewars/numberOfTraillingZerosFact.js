/*
 *    Write a program that will calculate the number of trailing zeros in a factorial of a given number.
 *
 *    N! = 1 * 2 * 3 * ... * N
 *
 *    Be careful 1000! has 2568 digits...
 *
 *    -----> Here there is the way of doing it
 *    For more info, see: http://mathworld.wolfram.com/Factorial.html
 *
 *    Examples
 *    zeros(6) = 1
 *    # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero
 *
 *    zeros(12) = 2
 *    # 12! = 479001600 --> 2 trailing zeros
 *    Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.
 *
 */
function zeros(n) {
    let kMax = getBaseLog(5, n);

    let total = 0;
    for (let i = 1; i <= kMax; i++) {
        let k = i;
        total += Math.floor(n / Math.pow(5, k));
    }

    return total;
}

const getBaseLog = (x, y) => Math.log(y) / Math.log(x);
