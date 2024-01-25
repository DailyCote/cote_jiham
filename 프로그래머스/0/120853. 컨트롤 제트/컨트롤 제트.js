function solution(s) {
    var answer = 0;
    let arr = s.split(' ');
    for(let i=0; i<arr.length; i++){
        if( arr[i] != 'Z'){
            answer += +arr[i];
        }else{
            answer -= +arr[i-1];
        }
    }
    return answer;
}