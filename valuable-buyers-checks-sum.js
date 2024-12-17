const valuableBuyersChecks = [10000, 20000, 30000];

const getChecksSum = (checks) => {
  let checksSum = 0;
  checks.forEach((check) => {
    checksSum += check;
  })
  return checksSum;
}

console.log(getChecksSum(valuableBuyersChecks));
