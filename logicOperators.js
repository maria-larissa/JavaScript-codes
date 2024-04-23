console.log("\n\nWorking with arrays");
const cityList = new Array(
    'Salvador',
    'São Paulo',
    'Rio de Janeiro'
);


const idadelist = [15,21];
console.log("idades" + idadelist);
let cont = 0;

while( cont < idadelist.length){
    if(idadelist[cont] >= 18){
        console.log("\n\nOptions below:")
        console.log(cityList);
    }else{
        console.log("\n\nYou must be 18 or above!!\n")
    }
    cont += 1;
}