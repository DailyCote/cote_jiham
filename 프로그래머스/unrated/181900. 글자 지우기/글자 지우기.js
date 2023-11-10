function solution(my_string, indices) {
    my_string = my_string.split("");
    my_string = my_string.map((item, index)=>{
        if(indices.includes(index)){
            return  item = '';
        }else return item
    }).filter(i=>i);
    return my_string.join('')
}
