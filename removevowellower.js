//Create a function called shortcut to remove all the lowercase vowels in a given string.

function shortcut(string){
  string = string.replace(/e|a|i|o|u/g, "")
  return string
}
