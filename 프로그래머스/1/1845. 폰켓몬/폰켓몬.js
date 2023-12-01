function solution(n) {
    let a = n.filter((i,id)=> n.indexOf(i) === id )
    if( a.length >= n.length/2) return n.length/2
    else return a.length;
}