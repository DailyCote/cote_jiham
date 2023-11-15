function solution(s) {
    var answer = '';
    
    if(s.indexOf('l') < s.indexOf('r')){ // l이 먼저나옴
        if(s.indexOf('l') != -1){
            answer = s.filter((i,id)=>id<s.indexOf('l'))
        }else{
            answer = s.filter((i,id)=>id>s.indexOf('r'))
        }
    }else if(s.indexOf('l') > s.indexOf('r')){ //r이 먼저나옴
        if(s.indexOf('r') !=-1){
            answer = s.filter((i,id)=>id>s.indexOf('r'))
        }else {
            answer = s.filter((i,id)=>id<s.indexOf('l'))
        }
    }else{
        return [];
    }
    return answer
}