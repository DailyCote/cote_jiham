function solution(a, b, n) {
    let result = 0;
    let now = 0;

    while (n >= a) {
        now = parseInt(n / a) * b
        result += now
        n = now + n % a
    }
    return result;
}