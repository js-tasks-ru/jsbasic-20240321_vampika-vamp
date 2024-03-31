function factorial(n) {
  // ваш код...
  let ans = 1;
  while (n > 1){
    ans *= n;
    n--;
  }
  return ans;
}
