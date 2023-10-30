function solution(picture, k) {
    var answer = [];
    for(let i=0; i<picture.length;i++){
        let arr = [];
        let change = picture[i].split('').map(i=>i.repeat(k)).join('');
        for(let j=0; j<k; j++){
            arr.push(change);
        }
        answer.push(arr)
    }
    return answer.flat();
}