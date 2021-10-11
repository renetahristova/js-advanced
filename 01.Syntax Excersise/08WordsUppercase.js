function solve (text) {
    text = text.toUpperCase().split(/\W/g);
    let arr=[];
    for (const el of text) {
        if(el.length > 0){
        arr.push(el)
        }
    }
    console.log(arr.join(', '));

}

solve('Hi, how are you?');
solve('hello');