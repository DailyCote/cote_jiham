function solution(n, s) {
    if( s === 1 || n>s) return [-1];
    
    let arr = Array(n).fill(null).map(()=>parseInt(s/n));
    
    // n =3   s =11    {3 4 4} 
    for(let i=n-1; i>=n - s%n ; i--){
        arr[i]++;
    }
    
 
    
    
    return arr;
}