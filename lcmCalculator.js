function smallestCommons(arr){
  const [min, max] =  arr.sort((a, b) => a - b)

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b)); //Calculates greatest common divisor

  const lcm = (a, b) => (a * b) / gcd(a, b); //Finds least common multiple of 2 numbers

  let currentLCM = min;
  for (let i = min + 1; i <= max; i++) {
    currentLCM = lcm(currentLCM, i);
  }

  return currentLCM
}
console.log(smallestCommons([2, 10])) //2520
