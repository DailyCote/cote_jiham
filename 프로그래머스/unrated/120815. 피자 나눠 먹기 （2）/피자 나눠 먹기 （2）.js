function solution(n) {
    let count = 1;
    while(count * 6 % n !== 0) {
        count++;
    }
    return count;
}