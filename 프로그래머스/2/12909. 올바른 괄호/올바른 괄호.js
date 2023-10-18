function solution(s){
    //())(()
    if(s[0] == ')' || s.charAt(s.length-1) == '(') return false;
    let arr = [];
    
    for(let a of s){
        if(a == '(') arr.push(1);
        else arr.pop();
    }
    
    return arr.length === 0;
}