function getCount(str) {

    let vowelsCount5 = (str.match(/i/g) || []).length;
    let vowelsCount1 = (str.match(/e/g) || []).length;
   let  vowelsCount2 = (str.match(/o/g) || []).length;
    let vowelsCount3 = (str.match(/a/g) || []).length;
    let vowelsCount4 = (str.match(/u/g) || []).length;
    
  let  vowelsCount = vowelsCount5 + vowelsCount1 + vowelsCount2 + vowelsCount3 + vowelsCount4
  
    
   return vowelsCount;
//   } //next time do it like  function getCount(str) {
//     return (str.match(/[aeiou]/ig)||[]).length;
//   } to make more efficient