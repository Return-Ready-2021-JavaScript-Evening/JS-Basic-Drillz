class StrangerStrings {

    getHelloWorld(){
        return "Hello World"
    }

    concatenation(firstSegment, secondSegment){
        return firstSegment + secondSegment;
    }

    getPrefix(input){
        let output = ""
         for(let i = 0; i < input.length; i++){
             output += input[i]
             if(i === 2){
                 break
             }
            
         }
         return output
    }

    getSuffix(input){
        // return input[0] + input[1] + input[3]
        // return input.substring(0,3);
        return input[input.length-3] + input[input.length-2] + input[input.length-1]
    }

    getMiddleCharacter(input){
        let x = input.length / 2;
        if (x % 2 === 0) {
            return input[x];
        } else {
            return input[Math.floor(x)];
        }

    }

    getFirstWord(input){
        // create variable to store output
        // gather first set of characters into var
        // break loop at first space
        let output = ""
        for (let i = 0; i < input.length; i ++){
            output += input[i];
            
            if (input[i + 1] === " "){
                break
            }
        } 
        return output;
    }
    
    getSecondWord(input){
        // create var to store output
        // go through each char until a space is reached
        // add each character after a space to the output
        // return output
        let output = ""
        for(let i = 0; i < input.length; i ++){
            if(input[i - 1] === " "){
                output += input[i]
                i++
                output += input[i]
                i++
                output += input[i] 
                i++
                output += input[i]
                // I know i could use another loop here. I tried a couple cases where "for(let j = i)" to start
                // the 2nd loop where the 1st left off but at this time I couldnt figure that out. I will work a little more on it.
                

                }
            
            }
            
        
        return output
        }

    
    
    reverse(input){
        // create var for output
        // check for characters starting at the end of string
        // add char to output var
        // retunr output
        let output = ""
        for(let i = input.length - 1; i >= 0; i --){
            output += input[i]
        }
        return output
    }
}

module.exports = StrangerStrings;