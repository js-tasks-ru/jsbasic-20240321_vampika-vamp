function checkSpam(str) {
  // ваш код...
  const reg = /1xBet|XXX/;
  if(str.match(reg/i) === null)
    return false;
  return true;
}
