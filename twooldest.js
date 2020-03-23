function twoOldestAges(ages){
let sortedAges = ages.sort((a, b) => b - a);
let newArray = [];
newArray.push(ages[1] , ages[0]);
return newArray;

}
twoOldestAges([44,56,90,1,6]);
