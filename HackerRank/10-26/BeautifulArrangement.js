function arrangements(n) {
    // Write your code here
    let arr = [];
    let res = 0;
    for(let i = 1; i <= n; i++) {
        arr.push(i);
    }
    
    function dfs(arr, curr) {
        if(curr.length === n) {
            //console.log(curr)
            res++;
            return;
        }
        //console.log(curr)
        for(let i = 0; i < arr.length; i++) {
            let pos = curr.length+1;
            if(!curr.includes(arr[i])) {
                if(arr[i] % pos === 0 || pos % arr[i] === 0) {
                    curr.push(arr[i])
                    dfs(arr,curr);
                    curr.pop();
                }
            }
            
            
        }
    }
    dfs(arr, [])
    return res;
}