function areaOrPerimeter(length, width) {
  return length === width ? length * width : length * 2 + width * 2;
}

module.exports = areaOrPerimeter;
