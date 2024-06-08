var typed= new Typed(".auto-type",{
    strings: ["Password Generator"],
    typeSpeed:125,
})
const passwordBox = document.getElementById("password");
const lengthElement = document.getElementById("length");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialCharacters = "~!@#$%^&*|}){(_+<>?:;/]\[";
const allChars= upperCase+lowerCase+numbers+specialCharacters;
function randomPassword(){
    let password="";
    const length = parseInt(lengthElement.value); 
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+specialCharacters[Math.floor(Math.random()*specialCharacters.length)];

    while(length>password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordBox.value=password;
}


function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}