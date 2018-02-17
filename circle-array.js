
const circleArray = function(arr, start, size){
    let newArr = [];
    let len = arr.length;

   /* if((start+size) >= len-1){
        newArr = arr.slice(start, len);
        let remain = len-start+1;
        newArr.push(arr.slice(0, remain));
    }
    else
        newArr = arr.slice(start, (start+size));*/

    var t = start;
    for(var i = 0; i <= size-1; i++){

        if(t >= len) t = 0;
            newArr.push(arr[t])
        t++;
    }



    return newArr;
};