    module.exports = function check(str, bracketsConfig) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            return checkBrackets (str, bracketsConfig[i][0], bracketsConfig[i][1])
        }
    }

    function checkBrackets (str, firstBracket, secondBracket) {
        let count = 0;
        
        for (let i=0; i < str.length; i++) {
            
            if ( str[i] == firstBracket) {
                count++
            } else if ( str[i] == secondBracket) {
                count--
            } else if (str.indexOf(firstBracket) == -1) {
                return false
            }
            if (count < 0) {
                break
            }
        }
    
        if (firstBracket == secondBracket && count % 2 == 0 ) {
            return true
        } else if (count != 0) {
            return false
        } else {
            return true
        }
    
    }
