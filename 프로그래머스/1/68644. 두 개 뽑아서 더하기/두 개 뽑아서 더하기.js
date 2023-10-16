function solution(n) {
    var answer = [];
    for(let i=0; i<n.length; i++){
        for(let j=i+1 ; j<n.length; j++){
            let sum = n[i] + n[j];
            if(answer.indexOf(sum) === -1) answer.push(sum)
        }
    }
    return answer.sort((a,b)=>a-b);
}