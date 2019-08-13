let studentNames = ["Andrew", "Demetria", "Hamida", "Bruno"];
console.log(studentNames);

let sevenMultiples = [7, 14, 21, 28, 35];
for(let eachElement in sevenMultiples)
{
    console.log(sevenMultiples[eachElement]);
}

let familyNames = ["Andrew", "Michael", "Bridget", "John"];
console.log(familyNames[2]);
familyNames.splice(1, 1);
console.log(familyNames); //check to make sure second item was removed
console.log(familyNames[2]);