const colors = ['red' , 'orange', 'yellow', 'green', 'blue', 'purple']
const newColors = ['black' , 'pink', 'navy', 'green', 'blue', 'purple'];


const printToDom = (toPrint, divId) =>{
    document.getElementById(divId).innerHTML += toPrint;
}

const printRainbow = (colorArr) =>{
    for (let i = 0; i < colorArr.length; i++){
        const color = colorArr[i]
        printToDom(color, 'rainbow')
    }
}

printRainbow(colors)
printRainbow(newColors)



const instructors = [
    {first: "Zoee", last: "Amese"},
    {first: "Callan", last: "Morrison"},
    {first: "Greg", last: "Korte"},
    {first: "Michael", last: "Clarkeeeeeee"},
  ];

  const printInstructorsName = (names)=>{
        for (let i =0; i < instructors.length; i++){
            const person = names[i]
            const element =`<p>${person.first} ${person.last}</p>`
            printToDom(element, 'person')
        }
  }

  printInstructorsName(instructors)