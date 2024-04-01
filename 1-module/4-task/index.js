function checkSpam(str) {
  // ваш код...
  if(str.match(/1xBet|XXX/i) === null)
    return false;
  return true;
}
