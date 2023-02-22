//Given a word, return true if that word contains only unique characters. Return false otherwise.
// Write your code below

function uniqueChars(str){
   for(let i = 0; i < str.length; i++ ){
    for(let j = i + 1; j < str.length; j++){
        console.log(str[i], str[j])
        if(str[i] === str[j]){
            return false;
            } 
        }
    }
    return true;
   }


// console.log(uniqueChars("River"))


//Bens solution

const unique = (str) => {
    let visited = []

    for(let i = 0; i < str.length; i++){
        if(visited.includes(str[i])){
            return false
        }else{
            visited.push(str[i])
        }
    }
    return true
}

console.log(unique('River'))