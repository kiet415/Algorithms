//Astronomy Board Game

function getPlanetToDestroy(planets) {
    // Write your code here
    for(let i =0 ; i < planets.length; i++) {
        let temp = planets.slice(0,i).concat(planets.slice(i+1))
        //console.log(temp)
        let even = 0;
        let odd = 0;
        for(let j = 0; j < temp.length; j++) {
            if(j % 2 === 0) {
                even += temp[j];
            } else {
                odd += temp[j];
            }
        }
        if(even === odd) return i+1;
    }
    return -1;
} 