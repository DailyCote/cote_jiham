function solution(c) {
    for(let i=0; i<c.length; i++){
        let len = c.length -i;
        // h번 이상 인용된 논문 수
        let h = c.filter(item => item >=len).length;
        // h번 이하 인용된 논문 수 굳이 안써도 동작 ... ?
        let l = c.filter(item => item <=len).length;
        // h번 이상 인용된 논문 수 가 h편 이상일때
        if(h >= len && l>= (c.length-h)){
            return len;
        }
    }
    return 0;
}

