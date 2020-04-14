//for some reason if you copy content from canva.com as a pdf it reverses everything??? solved this issue with a simple function!


function resumeReverse(content){
    let a = content.split('')
    a = a.reverse().join('')
    console.log(a)
    }
    
    resumeReverse("tresni ereh")