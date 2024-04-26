// 2. ⁠Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

// Question : [1,2,3,4]
// Answer: [2,4]

var arr=[1,2,3,4]

function even(){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            var arr1=[]
            arr1.push(arr[i])
            console.log(arr1)
        }
       
    }
}

even()