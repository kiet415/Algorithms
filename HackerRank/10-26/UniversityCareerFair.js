function maxEvents(arrival, duration) {
    // Write your code here
    let res =0;
    let arr = [];
    let end = Infinity;
    for(let i =0 ; i < arrival.length; i++) {
        arr.push([arrival[i], arrival[i] + duration[i]]);
    }
    
    arr.sort((a,b) => a[0] - b[0])
    console.log(arr);
    for(let i = arr.length-1; i >= 0; i--) {
        if(arr[i][1] <= end) {
            end = arr[i][0];
            res++;
        }
    }
    return res;
}