const removeFromArray = function(arr, ...key) {
    return arr.filter(item => !key.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
