function rollTheString(s, roll) {
    // Write your code here
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    s=s.split("")
    let plus = new Array(s.length).fill(0);
   

    for(let i = 0; i < plus.length; i++) {
        for(let j = 0; j < roll[i]; j++) {
            plus[j]++;
        }
    }
    
    //console.log(s)
    for(let i = 0; i < plus.length; i++) {
        
        const idx = alpha.indexOf(s[i])
        s[i] = alpha[(idx+plus[i]) %26]
        //console.log(s)
        
    }
    return s.join("");
}