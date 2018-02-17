
const circleArray = function(arr, start, size){
    let newArr = [];
    let len = arr.length;

    var t = start;
    for(var i = 0; i <= size-1; i++){

        if(t >= len) t = 0;
            newArr.push(arr[t])
        t++;
    }



    return newArr;
};
