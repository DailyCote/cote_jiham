function solution(N, stages) {
    var answer = [];

    let stLength = stages.length
    let per = [];
    for(let i=1; i<=N; i++){
        let numPer = stages.filter((item)=> item === i ).length;
        let toPer = numPer / stLength;  
        numPer === 0 ? answer.push(i) : per.push([i,toPer]); 
        stLength -= numPer ;
    } 
    
    for(let i=0; i<per.length; i++){
        let sPer = per.sort((a,b)=>{
            if (a[1] === b[1]) {
                return b[0] - a[0];
                }
            return a[1]-b[1];
        });
        answer.unshift(sPer[i][0]);
    }
     return answer;
}