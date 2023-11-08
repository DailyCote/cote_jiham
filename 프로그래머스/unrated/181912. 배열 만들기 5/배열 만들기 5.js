function solution(intStrs, k, s, l) {
    var answer = [];
    let slice = intStrs.map(i=>i.slice(s,s+l));
    
    return slice.filter(i=>i>k).map(i=>~~i);
}