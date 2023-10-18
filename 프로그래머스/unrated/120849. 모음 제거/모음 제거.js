function solution(m) {
    var answer = 'aeiou';
    
    return m.split('').filter(i=> !answer.includes(i)).join('');
}