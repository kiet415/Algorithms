function itemsSort(items) {
    // Write your code here
    let hash = {}
    let arr = [];
    let res = [];
    for(let i = 0; i < items.length; i++) {
        hash[items[i]] ? hash[items[i]] +=1 : hash[items[i]] = 1;
    }
    let keys = Object.keys(hash)
    for(let i = 0; i < keys.length; i++) {
        arr[i] = [keys[i], hash[keys[i]]]
    }
    arr = arr.sort((a,b) => a[1] - b[1])
    console.log(arr)
    for(let i = 0; i < arr.length; i++) {
        while(arr[i][1]) {
            res.push(arr[i][0])
            arr[i][1]--;
        }
    }
    return res;
}