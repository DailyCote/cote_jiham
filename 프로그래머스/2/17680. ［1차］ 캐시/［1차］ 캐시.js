function solution(s, c) {
    var answer = 0;
    
    if(s ===0) return c.length *5 ;
    
    let arr = [];
    c = c.join(' ').toLowerCase().split(' ');
    for(let i=0; i<c.length; i++){
        if(arr.length<s){
            if(arr.indexOf(c[i]) > -1){
                arr.push(c[i]);       
                answer += 1
            }else{
                arr.push(c[i]);       
                answer += 5
            }
        }else{
            if(arr.indexOf(c[i])> -1){
                arr.splice(arr.indexOf(c[i]), 1)
                arr.push(c[i]);
                answer += 1;
            }else{
                arr.shift();
                arr.push(c[i]);
                answer += 5;
            }
        }
    }
    return answer;
}