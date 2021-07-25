function calculateArray(array) {
  let nums = []
  let operand = []

  // if string "null" push 0 to nums array//
  for (var i = 0; i < array.length; i++) {
    if (array[i] === null) {
      nums.push(0)
    }
    // if string "12" or 12 push to nums array//    
    else if (!isNaN(array[i]) && (array[i]) !== '') {
      nums.push(parseInt(array[i]))
    }
  }
}
