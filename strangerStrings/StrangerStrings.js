class StrangerStrings {

    getHelloWorld() {
        return "Hello World";
    }

    concatenation(firstSegment, secondSegment) {
        return firstSegment + secondSegment;
    }

    getPrefix(input) {
        return input.substring(0, 3);
    }

    getSuffix(input) {
        return input[input.length - 3] + input[input.length - 2] + input[input.length - 1];
    }

    getMiddleCharacter(input) {
        let x = input.length / 2;
        if (x % 2 === 0) {
            return input[x];
        } else {
            return input[Math.floor(x)];
        }
    }

    getFirstWord(input) {
        var firstWord = input.replace(/ .*/, '');
        return firstWord;
    }

    getSecondWord(spaceDelimnatedInput) {
        const originalString = spaceDelimnatedInput;
        const splitString = originalString.split(" ");
        return splitString[1];
    }

    reverse(input) {
        return input.split("").reverse().join("");
    }
}

module.exports = StrangerStrings;