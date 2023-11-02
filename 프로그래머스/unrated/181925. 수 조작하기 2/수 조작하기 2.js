function solution(n) {
    
    n= n.map((i,id)=>{
        if(id == n.length-1){
            return ''
        }else if(n[id+1] == n[id]+1){
            return 'w'
        }else if(n[id+1] == n[id]+10){
            return 'd'
        }else if(n[id+1] == n[id]-1){
            return 's'
        }else if(n[id+1] == n[id]-10){
            return 'a'
        }
    })
    return n.join('')
}