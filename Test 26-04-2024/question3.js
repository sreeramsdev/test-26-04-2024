// 3. ⁠Write a JavaScript function that takes an array of numbers and returns a new array with multiple of two

// Question : [1,2,3,4]
// Answer: [2,4,6,8]

var arr=[1,2,3,4]
 function multipleOf2(){
    for(let i=0;i<arr.length;i++){
        var arr1=[]
        arr1.push(arr[i]*2)
        console.log(arr1)
    }
 }

 multipleOf2()