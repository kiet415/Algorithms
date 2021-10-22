/**
 * Name Matching
 * In this exercise, we will implement a
# `name_match` method that accepts the list of known aliases as well as the name returned
# on a record. It should return True if the name matches any of the aliases and False otherwise.
 */


//1. Exact match
console.log("NAME MATCH 1")
known_aliases = ['Alphonse Gabriel Capone', 'Al Capone']

function name_match1(arr, name) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === name) return true;
    }
    return false;
}
console.log(name_match1(known_aliases, 'Alphonse Gabriel Capone')) //=> True
console.log(name_match1(known_aliases, 'Al Capone')) //=> True
console.log(name_match1(known_aliases, 'Alphonse Francis Capone')) // => False

// 2. Middle name missing (on alias)
console.log("NAME MATCH 2")
known_aliases1 = ['Alphonse Capone']

function name_match2(arr, name) {
    let arrName = arr[0].split(" ");
    let arrFirst = arrName[0];
    let arrLast = arrName[1];
    name = name.split(" ");
    let first = name[0];
    let last = name[name.length-1];
    //console.log(arrFirst, arrLast, first, last)
    if(arrFirst === first && arrLast === last) return true;
    return false;
}

console.log(name_match2(known_aliases1, 'Alphonse Gabriel Capone'))// => True
console.log(name_match2(known_aliases1, 'Alphonse Francis Capone')) //=> True
console.log(name_match2(known_aliases1, 'Alexander Capone'))// => False

// 3. Middle name missing (on record name)

known_aliases3 = ['Alphonse Gabriel Capone']
console.log("NAME MATCH 3")
function name_match3(arr, name) {
    let arrName = arr[0].split(" ");
    name = name.split(" ");
    if(arrName[0] === name[0] && arrName[arrName.length-1] === name[name.length-1]) {
        if(name.length < 3) return true;
    }
    return false;  
}
console.log(name_match3(known_aliases3, 'Alphonse Capone')) //=> True
console.log(name_match3(known_aliases3, 'Alphonse Francis Capone'))// => False
console.log(name_match3(known_aliases3, 'Alexander Capone'))// => False


// 4. More middle name tests
console.log("NAME MATCH 4")
known_aliases4 = ['Alphonse Gabriel Capone', 'Alphonse Francis Capone']

function name_match4(arr, name) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === name) return true;
    }
    return false;
}

console.log(name_match4(known_aliases4, 'Alphonse Gabriel Capone'))// => True
console.log(name_match4(known_aliases4, 'Alphonse Francis Capone'))// => True
console.log(name_match4(known_aliases4, 'Alphonse Edward Capone'))// => False

//5. Middle initial matches middle name

console.log("NAME MATCH 5")
known_aliases5 = ['Alphonse Gabriel Capone', 'Alphonse F Capone']

function name_match5(arr, name) {
    name = name.split(" ");
    for(let i = 0; i < arr.length; i++) {
        let arrName = arr[i].split(" ");
        if(arrName[0] === name[0] && arrName[2] === name[2]) {
            
            if(name[1].length === 1 && arrName[1].length > 1) {
                if(name[1] === arrName[1][0]) return true;
            } else if(arrName[1].length === 1 && name[1].length > 1) {
                if(arrName[1] === name[1][0]) return true;
            }
        }
        
        
    }

    return false;
}

console.log(name_match5(known_aliases5, 'Alphonse G Capone'))// => True
console.log(name_match5(known_aliases5, 'Alphonse Francis Capone'))// => True
console.log(name_match5(known_aliases5, 'Alphonse E Capone'))// => False
console.log(name_match5(known_aliases5, 'Alphonse Edward Capone'))// => False
console.log(name_match5(known_aliases5, 'Alphonse Gregory Capone'))// => False

//Bonus: Transposition
/**
 * # Transposition (swapping) of the first name and middle name is relatively common.
# In order to accurately match the name returned from a record we should take this
# into account.
 */

//# 6. First name and middle name can be transposed
console.log("NAME MATCH 6")

known_aliases6 = ['Alphonse Gabriel Capone']


function name_match6(arr, name) {
    if(arr[0] === name) return true;
    arr = arr[0].split(" ");
    name = name.split(" ");
    if(arr[arr.length-1] === name[name.length-1]) {
        if(name.length < 3) {
            if(name[0] === arr[0] || name[0] === arr[1]) return true;
        } else {
            
            if(name[1].length === 1) {
                if(name[0] === arr[1] && name[1] === arr[0][0]) return true;
            } else {
                if(name[0] === arr[1] && name[1] === arr[0]) return true;
            }
        }
    }

    return false;
}
console.log(name_match6(known_aliases6, 'Gabriel Alphonse Capone'))// => True
console.log(name_match6(known_aliases6, 'Gabriel A Capone'))// => True
console.log(name_match6(known_aliases6, 'Gabriel Capone'))// => True
console.log(name_match6(known_aliases6, 'Gabriel Francis Capone'))// => False
console.log(name_match6(known_aliases6, 'Alphonse Gabriel Capone'))// => True

//. Last name cannot be transposed
console.log("NAME MATCH 7")


known_aliases7 = ['Alphonse Gabriel Capone']
console.log(name_match6(known_aliases7, 'Alphonse Capone Gabriel'))// => False
console.log(name_match6(known_aliases7, 'Capone Alphonse Gabriel'))// => False
console.log(name_match6(known_aliases7, 'Capone Gabriel'))// => False