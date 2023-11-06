function solution(p, limit) {
    var answer = 0;
    p.sort((a,b)=>a-b);
    // i ,i+1 로 비교하면 오류 , => min ,max 로 비교해보기
    let l = p.length;
    let i =0;
    while(true){
        if(i>=l) return answer;
        if(p[i] + p[l-1] <= limit){
            i++
        }
        l--;
        answer++;
    }
    
    return answer;
}
