function solve(num) {
    let same = true;
    let sum = 0;


    const arr = Array.from(num.toString());
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum += +element;

        if (i < arr.length - 1){
            const nextElement = arr[i + 1];
            if (!same) {
                continue;
            }

            same = element == nextElement?true:false;
        }        
    }
    console.log(same);
    console.log(sum); 
}
solve(2222222);
solve(1234);