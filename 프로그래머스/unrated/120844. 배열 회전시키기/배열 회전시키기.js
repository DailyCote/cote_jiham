function solution(num, direction) {
    var answer = [];
    if(direction == 'left'){
       answer = num.map((item,id)=>{
            if(id == num.length -1) return num[0];
            else return num[id+1]
        })
    }else if(direction = 'right'){
       answer = num.map((item,id)=>{
            if(id == 0) return num[num.length-1];
            else return num[id - 1]
        })
    }
    return answer;
}