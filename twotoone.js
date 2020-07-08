//Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters

function longest(s1, s2) {
  let s1Split = s1.split(``)
  let s2Split = s2.split(``)
  let sCombo = s1Split.concat(s2Split)
  let newArr = []
  let i = 0 
  
  for(i; i < sCombo.length;i++){
    if(newArr.indexOf(sCombo[i]) === -1){
      newArr.push(sCombo[i])
    }
  }
  return newArr.sort().join(``)
  
}
