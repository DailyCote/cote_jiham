function solution(bandage, health, atk) {
    let max = health;
    let hp = health;
    let sec = 1;
    let suc = 0;
    let atkArr = atk.map(i=>i[0]);
    for(let i=1; i<=atk[atk.length-1][0]; i++){
        if(hp != max && !atkArr.includes(sec)){
            hp += bandage[1];
            suc ++;
            if(suc % bandage[0] == 0){
                hp += bandage[2];
            }
            if(hp>max) hp = max
        }else if(atkArr.includes(sec)){
            hp -= atk[atkArr.indexOf(sec)][1];
            suc = 0;
        }
        if( hp <= 0) return -1;
        sec++;
    }
    return hp;
}