// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

var moveZeroes = function(nums) {
    let newArr = []
    for(let i = nums.length - 1; i >= 0; i--){
       
        if(nums[i] == 0){
          // console.log('nums is 0') 
          // console.log((nums.indexOf(nums[i])));
          newArr.push(nums[i])
          nums.splice(nums.indexOf(nums[i]),1)
        }
    }
    for(let i = 0; i < newArr.length; i++){
        nums.push(newArr[i])
    }
    // console.log(indexArr)
    // console.log(newArr)
    // console.log(nums.length)
    return nums
    // return nums

};
