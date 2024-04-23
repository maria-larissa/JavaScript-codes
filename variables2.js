console.log("Working with variables");

idade2 = 36; //Global variable beacuse doesn't have type
console.log(idade2);

const idade = 26; // Constant never change the value, even if we want. (can use with text, numbers, float, vectors, lists)
console.log(idade);

let idade3 = 50; // Variable you can change the value and type
console.log(idade3);

console.log("\n\nWorking with convertions");
console.log(2 + parseInt("22")); //Convert string to int
console.log(2 + parseFloat("22.2")); //convert string to float
console.log("10" / "2"); //JS will convert the string in number first
console.log("Larissa" / "2"); //JS can convert to number and will return NANn

const name = "Larissa";
console.log(`My name is ${name}`);


console.log("\n\nWorking with arrays");
const cityList = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);

console.log(cityList);

cityList.push('Juazeiro do Norte'); // Adding new elements  to the list 
console.log(cityList);
cityList.splice(0,1); //Removing elements, (position, how many to delete)
console.log(cityList);
console.log(cityList[2]); // Printing a specific element