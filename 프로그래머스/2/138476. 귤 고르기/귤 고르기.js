function solution(k, t) {
    var answer = 0;
    
    let arr = Array(Math.max(...t)).fill(0);
    for(let a of t){
        arr[a-1]++;
    }
    arr.sort((a,b)=>b-a)
    let id = 0;
    while(k>0){
        k -= arr[answer];
        answer ++;
        
    }
    console.log(arr)
    return answer;
}