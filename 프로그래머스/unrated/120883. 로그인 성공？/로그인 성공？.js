function solution(id, db) {
    var answer = '';
    const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
    for(let i=0; i<db.length; i++){
        if(equals(id, db[i])) return 'login';
        else if(id[0] == db[i][0] && id[1] != db[i][1]) return 'wrong pw'
    }
    return 'fail'
}