function solution(a, b, n) {
    let result = 0;
    let now = 0;

    // n : 현재 가지고 있는 빈병 수
    while (n >= a) {
        now = parseInt(n / a) *b
        result += now
        n = now + n % a
    }
    return result;
}