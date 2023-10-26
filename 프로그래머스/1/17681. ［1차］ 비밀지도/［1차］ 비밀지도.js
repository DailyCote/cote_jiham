function solution(n, arr1, arr2) {
    var answer = [];
    let binArr1 = arr1.map(i => i.toString(2).padStart(n, '0'));
    let binArr2 = arr2.map(i => i.toString(2).padStart(n, '0'));
    for(let i=0; i<n; i++){
        let binAdd = ''; //전체 지도 결과 값
        for(let j=0; j<n; j++){
            if(+binArr1[i][j] + +binArr2[i][j] >= 1){
                binAdd += '1';
            }else{
                binAdd += '0';
            }
        }
        answer.push(binAdd);
    }
    let result = [];
    for(let a of answer){
        let one = a.replaceAll('1','#');
        let two = one.replaceAll('0', ' ');
        result.push(two);
    }
    
    
    return result;
}