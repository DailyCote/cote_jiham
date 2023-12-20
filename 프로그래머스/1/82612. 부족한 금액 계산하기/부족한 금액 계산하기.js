function solution(p, m, c) {
    let sum = 0;
    for(let i=1; i<=c; i++){
        sum += p*i
    }
    
    return sum > m ? sum-m : 0;
}