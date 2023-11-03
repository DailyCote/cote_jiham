function solution(n, w) {
    var answer = [];
    let r = -1;
    for(let i=0; i<w.length; i++){
        if(w.indexOf(w[i]) != i || (i !=0 && w[i-1][w[i-1].length-1] != w[i][0])){
           r=i+1
            break;
        }
    }
    if( r== -1) return [0,0];
    let f = 0;
    let b = Math.ceil(r/n);
    if( r%n !=0) f = r%n;
    else f = n;
    
    
    
    return [f,b];
}