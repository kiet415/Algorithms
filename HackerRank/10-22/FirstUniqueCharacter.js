
function getUniqueCharacter(s) {
    // Write your code here
    let res = -1;
    let hash = {};
    for(let i = 0; i < s.length; i++) {
        hash[s[i]] ? hash[s[i]].push(i+1) : hash[s[i]] = [i+1]
    }
    console.log(hash)
    let keys = Object.keys(hash);
    for(let i = 0; i < keys.length; i++) {
        //console.log(hash[keys[i]] , keys[i])
        if(hash[keys[i]].length === 1) {
            if(res === -1) {
                res = hash[keys[i][0]];
            } else {
                res = Math.min(res, hash[keys[i][0]])
            }
        }
    }
    return res;
}