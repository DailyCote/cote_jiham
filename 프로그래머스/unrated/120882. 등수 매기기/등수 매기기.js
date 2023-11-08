function solution(score) {
    var answer = [];
    let count = 0;
    score = score.map((item,id)=>(item[0]+item[1])/2);
    let score1 = [...score]
    let sortArr = score1.sort((a,b)=>b-a);
   
    
    return score.map(i=>sortArr.indexOf(i)+1);
}