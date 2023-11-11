function solution(m, n) {
    var answer = [];
    for(let i=0; i<m.length; i+=n){
        answer.push(m.slice(i,i+n))
    }
    return answer;
}