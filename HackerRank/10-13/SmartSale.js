function deleteProducts(ids, m) {
    // Write your code here
    let hash = {};
    let res = 0;
    for(let i = 0; i < ids.length; i++) {
        hash[ids[i]] ? hash[ids[i]] +=1 : hash[ids[i]] = 1;
    }
    //console.log(hash)
    let keys= Object.keys(hash).sort((a,b) => hash[a]-hash[b]);
    //console.log(keys)
    for(let i = 0 ; i < keys.length; i++) {
        if(hash[keys[i]]) {
            while(m > 0) {
                if(hash[keys[i]] === 0) break;
                hash[keys[i]]--;
                m--;   
            }
        }
    }
    for(let i = 0; i < keys.length; i++) {
        if(hash[keys[i]]) res++;
    }
    return res;
}