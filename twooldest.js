// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages){
let sortedAges = ages.sort((a, b) => b - a);
let newArray = [];
newArray.push(ages[1] , ages[0]);
return newArray;

}

ages([44,56,90,1,6]);
