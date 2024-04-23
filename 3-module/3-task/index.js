function camelize(str) {
  // ваш код...
  let temp = str.split('-');
  return temp
    .map((t, index) => {if(index > 0) {return t[0].toUpperCase() + t.slice(1)} else return t})
    .join('');
}
