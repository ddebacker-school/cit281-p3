function validDenomination(coin) {
    let validCoin = [1,5,10,25,50,100];
    if (validCoin.indexOf(coin) !== -1) {
        return true
    } else {
        return false
    };
};

function valueFromCoinObject(obj) {
  const {denom = 0,count = 0,} = obj;
  return denom * count;
}

function valueFromArray(arr) {
    reducer = (accumulator, currentValue) => accumulator + valueFromCoinObject(currentValue);
    return arr.reduce(reducer,0);
}

function coinCount(...coinage) {
  return valueFromArray(coinage);
}

console.log("{}", coinCount({denom: 5, count: 3}));
console.log("{}s", coinCount({denom: 5, count: 3}, {denom: 10, count: 2}));
const coins = [{denom: 25, count: 2}, {denom: 1, count: 7}];
console.log("...[{}]", coinCount(...coins));

module.exports = {
    coinCount
  };