class StrangerStrings {

    getHelloWorld(){
        return "Hello World";
    }

    concatenation(firstSegment, secondSegment){
        return firstSegment + secondSegment;
    }

    getPrefix(input){
        //return input[0] + input[1] + input[2];
        return input.substring(0, 3);
    }

    getSuffix(input){
        return input[input.length-3] + input[input.length-2] + input[input.length-1];
        //return input.substring(-3, -1);
    }

    getMiddleCharacter(inputValue){
        let half = (inputValue.length / 2) - 0.5;
        return inputValue[half];
    }

    getFirstWord(inputValue){
        let output = "";
        for(let i = 0; i < inputValue.length; i++){
            if(inputValue[i] !== " "){
                output += inputValue[i];
            } else{
                break;
            }
        }
        return output;
    }
    
    getSecondWord(spaceDelimnatedInput){
        let output = "";
        for(let i = spaceDelimnatedInput.length -1; i > 0; i--){
            if(spaceDelimnatedInput[i] !== " "){
                output += spaceDelimnatedInput[i];
            } else{
                break;
            }
        }
        return output.split("").reverse().join("");
    }
    
    reverse(inputValue){
        return inputValue.split("").reverse().join("");
    }
}

module.exports = StrangerStrings;