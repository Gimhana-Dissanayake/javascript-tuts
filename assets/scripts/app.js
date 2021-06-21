const defaultResult = 0;

let currentResult = defaultResult;

currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculationDescription = `( ${defaultResult} + 10) * 3 / 2 - 1`;

let errorMessage = "An error \n" + "occurred!";

//to see the effect of \n, use white-space:pre css property

outputResult(currentResult, calculationDescription + errorMessage);
