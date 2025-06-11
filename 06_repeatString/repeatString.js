const repeatString = function (word, count) {

    if(count < 0) {return "ERROR";}
    
    i = 0;
    let output = "";
    while(i < count)
    {
        output += word;
        i++;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
