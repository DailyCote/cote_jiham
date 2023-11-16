function solution(a, b) {
    let count = 0;
    if( a===b ) return 0;
    a=a.split('');
    b=b.split('');
    for(let i=0; i<a.length; i++){
        let c = [...a]
        for(let j=0; j<a.length; j++){
            if(j ==0){
                a[j] = c[a.length-1];
            }else{
                a[j] = c[j-1] 
            }
        }
        count ++;
        if(JSON.stringify(a) == JSON.stringify(b)) return count;
    }
    return -1;
}