function solution(my) {
    var answer = [];
    for(let i=1; i<=my.length; i++){
        answer.push(my.slice(-i))
    }
    
    return answer.sort();
}