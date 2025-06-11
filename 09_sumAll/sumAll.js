const sumAll = function (min, max) {
    if(!Number.isInteger(min) || !Number.isInteger(max) || min < 0 || max < 0){
        return 'ERROR';
    }

    let arr = [];
    let i = Math.min(min,max)
    let j = Math.max(min,max)
    while(i <= j)
    {
        arr.push(i++);
    }
    
    let result = arr.reduce((total, number) => total + number,0)
    return result;
};
// Do not edit below this line
module.exports = sumAll;
