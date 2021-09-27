//How Many Words

function howMany(sentence) {
    // Write your code here
    let words = sentence.split(" ");
    let letters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    //console.log(words, words.length)
    let res = 0;
    for(let i = 0; i < words.length; i++) {
        
        let correctWord = true;
        //console.log(words[i])
        if(isNaN(words[i]) && words[i] !== "") {
            //console.log(words[i])
            for(let j = 0; j < words[i].length-1; j++) {
                if(!letters.includes(words[i][j]) && words[i][j] !== "-") correctWord = false;
            }
            if(correctWord) res++;
            
        }
    }
    return res
}