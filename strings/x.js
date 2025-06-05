function removeExtraWhiteSpaces () {
    const str = "   Hello   World   ";
    const trimit = str.trim()
    let noExtra = ""
    for (let i = 0; i < trimit.length; i++){
        if (trimit[i] && trimit[i + 1] == " ")
            continue
        noExtra += trimit[i]
    }
    return noExtra
}
console.log(removeExtraWhiteSpaces())

function checkPalindrome(str) {
    const startIndex = 0;
    const endIndex = str.length - 1;
    for (let i = startIndex; i <= endIndex / 2; i++) {
        if (str.charAt(i) !== str.charAt(endIndex - i)) {
            return false;
        }
    }
    return true;
}

console.log(checkPalindrome("racecat"));
