// ESERCIZIO 1
const checkNumb = (num1, num2) => {
    if (num1 === 50 || num2 === 50 || num1 + num2 === 50 ) {
        return true
    }else{
        return false
    }
}

console.log(checkNumb(20,35));

// ESERCIZIO 2
const removeChar = (string, position) => {
    return string.slice(0, position) + string.slice(position + 1)
    // let arrayFromString = string.split("")
    // console.log(arrayFromString);
}

console.log(removeChar("ciao", 2));

// ESERCIZIO 3
const checkValue = (num1, num2) => {
    // if ((num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) || 
    // (num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100)) {
    //     return true   
    // } else{
    //     return false
    // }
    const rangeOne = (num1 >= 40 && num1 <= 60) && (num2 >= 40 && num2 <= 60);
    const rangeTwo = (num1 >= 70 && num1 <= 100) && (num2 >= 70 && num2 <= 100)

    return rangeOne || rangeTwo
}

console.log(checkValue(70,81));

//ESERCIZIO 5
const arraySum = (array) => {
    let sum = 0
    for(let num of array){
        sum += num;
    }
    return sum
}

const array = [1, 2, 3]
console.log(arraySum(array));

// ESERCIZIO 8
const createAcronym = (string) => {
    const words = string.split(" ");
    console.log(words);

    let acronym = " ";

    for(let word of words){
        acronym += word[0].toUpperCase();
    }

    return acronym
}

console.log(createAcronym("Ciao come stai"));

// ESERCIZI EXTRA 1

const maxChar = (string) => {
    let count = {};
    for (let char of string.toLowerCase()){
        count[char] = (count[char] || 0) + 1;
    }

    let mostUsedChar = "";
    let maxCount = 0;

    for(let char in count){
        if(count[char] > maxCount){
            mostUsedChar = char
            maxCount = count[char]
        }
    }

    return mostUsedChar
}

console.log(maxChar("Ciao ciccio"));

// ESERCIZI EXTRA 2
const checkString = (string1, string2) => {
    let cleanedStringOne = string1.replace(/[^\w]/g, "").toLowerCase();
    let cleanedStringTwo = string2.replace(/[^\w]/g, "").toLowerCase();

    const orderedStringOne = cleanedStringOne.split("").sort().join("");
    const orderedStringTwo = cleanedStringTwo.split("").sort().join("");

    return orderedStringOne === orderedStringTwo
}

console.log(checkString("teatro", "attore"));

// ESERCIZIO EXTRA 3
const splitAndOrderString = (word) => {
    return word.toLowerCase().split("").sort().join("");
}

const findAnagram = (word, possibleAnagrams) => {
    const sortedWord = splitAndOrderString(word);

    const result = possibleAnagrams.filter((anagram)=>{
        return splitAndOrderString(anagram) === sortedWord
    })

    return result;
}

console.log(findAnagram("cartine", ['carenti', 'incerta', 'espatrio']));

// ESERCIZIO EXTRA 4
const palindromo = (string) => {
    const cleanedWord = string.replace(/[^\w]/g, "").toLowerCase()
    const reverseWord = cleanedWord.split("").reverse().join("");
    
    return reverseWord === cleanedWord
}

console.log(palindromo("i topi non avevano nipoti"));

// ESERCIZIO EXTRA 5
const reverseNum = (num) => {
    const stringNum = String(num);
    
    return Number(stringNum.split("").reverse().join(""));
}

console.log(reverseNum(198));

// ESERCIZIO EXTRA 10
// const spiral = () => {

// }
