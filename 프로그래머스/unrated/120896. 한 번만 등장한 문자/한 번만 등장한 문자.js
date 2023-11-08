function solution(s) {
    let arr = [];
    s = s.split('').sort().join('');
    for(let i=0; i<s.length; i++){
        if(s.indexOf(s[i]) != i) s= s.replaceAll(s[i], '1');
    }
    s= s.replaceAll(1 , '');
    return s
    
}