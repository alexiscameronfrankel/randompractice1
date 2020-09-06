// Your task is simply to count the total number of lowercase letters in a string.

function lowercaseCount(str){

  const result = str.split(``).filter(element => element.toUpperCase() != element);
  return result.length
  
}
