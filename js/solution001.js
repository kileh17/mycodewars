function digitize(n) {
    let numArr = n.toString().split("").map(function(x){return parseInt(x)})
    return numArr.reverse()
  }