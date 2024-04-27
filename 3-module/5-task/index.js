function getMinMax(str) {
  // ваш код...
  let temp = str.split(' ').filter((t) => !isNaN(Number(t)));
  return({min: Math.min.apply(null, temp), max: Math.max.apply(null, temp)})
}
