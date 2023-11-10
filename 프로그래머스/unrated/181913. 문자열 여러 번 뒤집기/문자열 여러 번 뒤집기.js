function solution(m,q) {
    let answer = '';
    let count = 0;
    m = m.split('')
    for(let i=0; i<q.length; i++){
        answer = '';
        count = 0;
        for(let j=q[i][0]; j<=q[i][1]; j++){
            answer += m[j];
        }
        answer = answer.split('').reverse();
        for(let j=q[i][0]; j<=q[i][1]; j++){
            m[j] = answer[count];
            count++;
        }
    }
    return m.join('')
}