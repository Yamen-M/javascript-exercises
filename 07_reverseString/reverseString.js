const reverseString = function(word) {
    let result= new Array(word.length);
    let j = word.length - 1;
    for(let i = 0; i < word.length; i++)
    {   
        result[i] = word[j--]
    }
    return result.join('');
};

// Do not edit below this line
module.exports = reverseString;
