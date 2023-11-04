function solution(string, m, c) {
    var answer = '';
    for(let i =0; i<string.length; i+=m){
        let a = string.substr(i,m)[c-1];
        answer+=a;
    }
    return answer;
}