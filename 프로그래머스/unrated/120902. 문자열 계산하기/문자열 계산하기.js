function solution(m) {
    m = m.split(' ').map(i=>{
        if(Number(i) == typeof(1)){
            return Number(i)
        }else return i
    });
    let num = 0;
    let count = 0;
    for(let i=0; i<m.length; i++){
        if(m[i] == '+'){
            if(count == 0){
                num += Number(m[i-1]) + Number(m[i+1]);
                count++;
            }else{
                num = num + Number(m[i+1]);
            }
        }else if(m[i] == '-'){
            if(count == 0){
                num += Number(m[i-1]) - Number(m[i+1]);
                count++
            }else{
                num = num - Number(m[i+1]);
            }
        }
    }
    return num    
}
console.log(solution('4 + 4 - 3 + 2 - 41'))