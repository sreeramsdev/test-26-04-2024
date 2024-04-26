// 4. ⁠Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).

// Question: “bala”
// Answer: my name is: Bala

var word="bala"

function capitalizeWord(){
    var fletter=word.charAt(0).toUpperCase
    
    var otherLetter=word.slice(1)
    var result=fletter+otherLetter
    console.log("My name is : "+result) 
}

capitalizeWord()