function solution(p) {
    p = p.split(' ');
    let x =0;
    let num = 0;
    for(let i=0; i<p.length; i++){
        if(p[i].indexOf('x') >-1){
            if(+p[i].replace('x','') == 0){
                x +=1;
            }else{
                x += +p[i].replace('x','');
            }
        }else if(!isNaN(p[i])){
            num += +p[i]
        }
    }
    if( x != 0 && num != 0) return `${x === 1 ? '' : x}x + ${num}`
    else if ( x != 0 && num == 0) return `${x === 1 ? '' : x}x`
    else return `${num}`

}