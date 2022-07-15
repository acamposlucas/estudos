function hoopCount(n) {
  const hoops = n;
  if (hoops >= 10) {
    return `Great, now move on to tricks`;
  } else {
    return `Keep at it until you get it`;
  }
}

module.exports = hoopCount;
