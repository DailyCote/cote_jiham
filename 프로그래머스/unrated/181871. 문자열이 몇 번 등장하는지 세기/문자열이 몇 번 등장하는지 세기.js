function solution(m, p) {
    var answer = 0;
    for(let i=0; i<m.length; i++){
        if(m.slice(i,i+p.length) === p) answer++;
    }
    return answer;
}