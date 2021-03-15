    module.exports = function check(str, bracketsConfig) {
    for (let index = 0; index < bracketsConfig.length; index++) {
        if(!checPairNumbers(str,bracketsConfig[index][0],bracketsConfig[index][1])){
            return false;
        }
            return checkOpeningClosingBrackets(str,bracketsConfig[index][0],bracketsConfig[index][1])
        }
    }

function checkOpeningClosingBrackets(str, firstBracket,secondBracket){
    let indexFirstBracket=-1;
    let indexSecondBracket=-1;

    while(true){
        indexFirstBracket=str.indexOf(firstBracket,indexFirstBracket+1)   ;

        if(firstBracket===secondBracket){
            secondBracket=firstBracket+1;
        }
        indexSecondBracket=str.indexOf(secondBracket,indexSecondBracket+1);

        if(indexFirstBracket===-1||indexSecondBracket===-1){
            return true
        }

        if(indexFirstBracket>indexSecondBracket){
            return false;
        }else if((indexFirstBracket-indexSecondBracket)%2===0){
            return false;
        }
    }
}

function checPairNumbers(str,firstBracket,secondBracket){
    let numberFirstBrackets=str.split(firstBracket).length-1;
    let numberSecondBrackets=str.split(secondBracket).length-1;

    return numberFirstBrackets===numberSecondBrackets
}
