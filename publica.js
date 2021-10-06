let hash = {
    "cars" : ["BMW","VOLVO","HONDA"],
    "food" : ["MCD","KFC","COKE"],
    "clothes": ["MACY","NIKE","GAP"],
    "games" : ["SONY","MICROSOFT","APPLE"]
}


let keys = Object.keys(hash);
console.log(keys);
let res = [];
while(hash[keys[keys.length-1]].length) {
    let temp = [];
    for(let i = 0; i < keys.length; i++) {
        
        temp.push(hash[keys[i]].shift());
        //console.log(temp)
    }
    res.push(temp);
}
console.log(res)