function solution(n_str) {
    var answer = n_str;
    for(let i=0; i<n_str.length; i++){
        if(n_str[i] != '0') return answer;
        else answer = answer.substr(1,answer.length)
    }
    
}