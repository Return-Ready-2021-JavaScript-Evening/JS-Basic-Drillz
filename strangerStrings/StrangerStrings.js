class StrangerStrings {

    getHelloWorld(){
        return "Hello World";
    }

    concatenation(firstSegment, secondSegment){
        return firstSegment.concat(secondSegment);
    }

    getPrefix(input){
        return input.substring( 0, (input.length / 2) );
    }

    getSuffix(input){
        return input.substring( (input.length / 2), ( input.length));
    }

    getMiddleCharacter(input){
        return input[ 
            input.length % 2 == 0 ? ( input.length / 2 ) : ( (input.length - 1) / 2 ) 
        ];
    }

    getFirstWord(input){
        const arr = input.split(' ');
        return arr[0];
    }
    
    getSecondWord(spaceDeliminatedInput){
        const arr = spaceDeliminatedInput.split(' ');
        return arr[1];
    }
    
    reverse(input){
        return input.split('').reverse().join('');
    }
}

module.exports = StrangerStrings;