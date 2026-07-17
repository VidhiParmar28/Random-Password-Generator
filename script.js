
var copy = document.getElementById("copy");
var generate = document.getElementById("btntogenerate");
var password = document.getElementById("password");

const random = 
   {Uppercase : ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    lowercase : ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    Numbers : [1,2,3,4,5,6,7,8,9,0,10],
    Symbols : ["!","@","#","$","%","^","&","*","(",")","_","+","=","[","]","|",":","'",";",".","/","?",",","~","`"],
    }




const randomUppercase = ()  => {
    const randomuppercaseindex = Math.floor(Math.random()*26);
    return random.Uppercase[randomuppercaseindex];
}

const randomlowercase = ()  => {
 
    const randomlowercaseindex = Math.floor(Math.random()*26);
    return random.lowercase[randomlowercaseindex];

}

const randomNumber = ()  => {
    const randomNumberindex = Math.floor(Math.random()*11);
    return random.Numbers[randomNumberindex];
}

const randomSymbols = ()  => {
    const randomSymbolindex = Math.floor(Math.random()*25);
    return random.Symbols[randomSymbolindex];
}





function createpassword() {

 var UPPER = randomUppercase();
var LOWER = randomlowercase();
var NUM = randomNumber();
var SYMBOL = randomSymbols();
const  Newpassword = UPPER + LOWER + NUM + SYMBOL;
// const Newpassword = `${randomUppercase()} +  ${randomlowercase()} + ${randomNumber()} + ${randomSymbols()}`;
console.log(Newpassword);
return Newpassword;
// password.innerText = Newpassword;
    }


    generate.addEventListener("click" , () => {
        // createpassword();
       password.value =  createpassword();
    });

















// let currentIdx = 0;



// function createpassword(){
//    const pointer =  random[currentIdx];
//    const finalpassword = randomUppercase();
// console.log(finalpassword);

// }


// password.innerText = finalpassword.innerText;

// function copypassword() {
//     copy.innerText = password.innerText;
//     this.alert("password is copy");
// }

