function solution(e) {
    let sort = [...e].sort((a,b)=>b-a);
    return e.map(i=>sort.indexOf(i)+1);
}