function solution(strArr) {
    var answer = strArr;
    for(let i=0; i<answer.length; i++){
        if(answer[i].includes('ad')){
            answer.splice(i,1);
            i--;
        }  
    }
    return answer;
}