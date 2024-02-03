function solution(l, r) {
    var answer = [];
    for (let i = l; i <= r; i++) {
        let correct = 0;
        let str = i.toString()
        for (let j = 0; j <= str.length - 1; j++) {
            if (!str[j].includes('5') && !str[j].includes('0')) {
                correct = 1;
                break;  
            }
        }
        if (correct === 0) {
            answer.push(i);
        }
    }
    return answer.length ? answer : [-1];
}
