function solution(s) {
    var answer = [];
    s = s.replaceAll('{', '[');
    let arr = JSON.parse(s.replaceAll('}', ']'));
    arr.sort((a,b) => a.length - b.length);
    let arr2 = [...arr];
    let max = 0;
    let result = [];
    for(let i=1; i<arr.length; i++){
        arr2[i] = arr[i].filter(v => !arr[i-1].includes(v));
    }
    for(let i=0; i<arr2.length; i++){
        result.push(arr2[i][0]);
    }
    console.log(result);
    return result;
}