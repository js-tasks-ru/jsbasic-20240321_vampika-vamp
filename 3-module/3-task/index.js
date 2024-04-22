function camelize(str) {
  // ваш код...
  let temp = str.split('-');
  return temp
    .map((t, index) => {if(index > 0 && t.length > 0) {console.log(index); return String.fromCharCode(t[0].charCodeAt() - 32) + t.slice(1)} else return t})
    .join('');
}
