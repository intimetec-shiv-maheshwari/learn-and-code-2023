function hasSimilarDigits(digits) {
  const lengthOfNumber = digits.length
  let count = 0;
  for (let i = 0; i < lengthOfNumber - 1; i++) {
    if (digits[i] === digits[i + 1]) {
      count++;
    }
  }
  if (lengthOfNumber - count == 1) {
    return true;
  } 
  return false
}

function arrangeInAscendingOrder(digits){
  return digits
  .sort((a, b) => {
    return a - b;
  })
  .join("");
}

function arrangeInDescendingOrder(digits){
  return digits
  .sort((a, b) => {
    return b - a;
  })
  .join("");
}

function applyKaprekar(digits) {
  let iterations = 0;
  while (iterations < 8) {
    iterations = iterations + 1;
    while (digits.length < 4) {
      digits.push("0");
    }

    const smallestNumber = arrangeInAscendingOrder(digits)
    const largestNumber = arrangeInDescendingOrder(digits)
    
    const nextNumber = largestNumber - smallestNumber;
    digits = nextNumber.toString().split("");
    if (nextNumber === 6174) {
      return iterations;
    }
  }
}

function validateInputNumber(inputNumberDigits){
  if (inputNumberDigits.length != 4) {
    console.log("Please enter a valid four-digit number");
    return false;
  }

  if (hasSimilarDigits(inputNumberDigits)) {
    console.log(
      "Please input a different number with atleast two different digits"
    );
    return false
  }

  return true
}
function kaprekarIteration(inputNumber) {
  let digits = inputNumber.toString().split("");
  if(validateInputNumber(digits)){
    console.log("No of iterations", applyKaprekar(digits));
  }
}

kaprekarIteration("9831");
