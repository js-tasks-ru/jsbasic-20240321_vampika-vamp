function ucFirst(str) {
  // ваш код...
  if(str.length < 1)
    return str;
  let temp = str[0];
  temp = temp.toUpperCase();
  return temp + str.slice(1);
}
