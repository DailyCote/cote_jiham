function solution(a) {
    
    let first =  [1,2,3,4,5];
    let second = [2,1,2,3,2,4,2,5];
    let third = [3,3,1,1,2,2,4,4,5,5];
    let ab = [first, second, third];
    let ab1 = [];
    for(let i=0; i<3; i++){
        if(ab[i].length<a.length) ab1.push(ab[i].join('').repeat(a.length-ab[i].length).split(''))
        else ab1.push(ab[i])
    }
    //console.log(ab1)
    let ab2 = ab1.map(a=> a.map(Number));;
     // console.log(ab2)
    let arr = [];
    for(let i=0; i<ab2.length; i++){
        if(ab2[i].length >a.length) arr.push(ab2[i].slice(0,a.length))
        else arr.push(ab2[i])
    }
    let result = [];
    for(let i=0; i<arr.length; i++){
        let count = 0;
        for(let j=0; j<a.length; j++){
            if(arr[i][j] === a[j]) count ++
        }
        result.push(count);
    }
    //console.log(result)
    let maxScore = Math.max(...result);
    return result.reduce((acc, current, index) => {
    if (current === maxScore) {
        acc.push(index + 1);
    }
    return acc;
}, []);
}