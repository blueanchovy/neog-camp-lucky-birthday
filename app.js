const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-button");
const outputSpace = document.querySelector("#output-space");

checkButton.addEventListener("click", () => {

    const dob = dateOfBirth.value;
    const numToCheck = luckyNumber.value;
    if(dob&&numToCheck){
        const sum = calculateSum(dob);
        if(checkIfLucky(sum, numToCheck)){
            outputSpace.innerText = "Your Birthday is lucky for you."
        }
        else{
            outputSpace.innerText = "Your Birthday is not so lucky."
        }
    }
    else{
        outputSpace.innerText = "Enter both fields";
    }
});

calculateSum = (dob) => {
    dob = dob.replaceAll("-", "");
    let sumTotal = 0;
    for(let index = 0; index < dob.length; index++){
        sumTotal += Number(dob[index]);
    }
    return sumTotal;
}

checkIfLucky = (sum, num) => {
    if(sum%num == 0){
        return true;
    }
    else{
        return false;
    }  
}