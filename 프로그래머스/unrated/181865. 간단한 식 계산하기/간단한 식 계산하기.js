function solution(bi) {
    bi = bi.split(' ');
    if(bi[1] == '+'){
        return +bi[0] + +bi[2];
    }else if(bi[1] == '-'){
        return +bi[0] - +bi[2];
    }else{
        return +bi[0] * +bi[2];
    }

}