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
    // if operand push to operand array    
    else if ((array[i]) === '*' || (array[i]) === '/' || (array[i]) === '-' || (array[i]) === '+') {
      operand.push(array[i])
    }
  }
  // create a switch case to run arithmatic//
  let answer = []
  let num1 = nums[0]
  let num2 = nums[1]

  switch (operand[0]) {
    case '+':
      answer = num1 + num2
      break
    case '-':
      answer = num1 - num2
      break
    case '*':
      answer = num1 * num2
      break
    case '/':
      answer = num1 / num2
      break
    default:
      answer = NaN
      break
  }

  return answer
}
module.exports = calculateArray
