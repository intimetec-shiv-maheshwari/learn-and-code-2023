function hasSimilardigits(digits) {
    let count = 0;
    for (let i = 0; i < digits.length - 1; i++) {
      if (digits[i] === digits[i + 1]) {
        count++;
      }
    }
    if (digits.length - count == 1) {
      return true;
    } else {
      return false;
    }
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
    let nextNumber = NaN;
    let iterations = 0;
    while (iterations < 8) {
      iterations = iterations + 1;
      while (digits.length < 4) {
        digits.push("0");
      }
  
      let smallestNumber = arrangeInAscendingOrder(digits)
      let largestNumber = arrangeInDescendingOrder(digits)
      
      nextNumber = largestNumber - smallestNumber;
      digits = nextNumber.toString().split("");
      if (nextNumber === 6174) {
        return iterations;
      }
    }
  }
  
  function kaprekarIteration(inputNumber) {
    let digits = inputNumber.toString().split("");
    if (digits.length != 4) {
      console.log("Please enter a valid four-digit number");
      return;
    }
  
    if (hasSimilardigits(digits)) {
      console.log(
        "Please input a different number with atleast two different digits"
      );
    } else {
      console.log("No of iterations", applyKaprekar(digits));
    }
  }
  
  kaprekarIteration("5214");