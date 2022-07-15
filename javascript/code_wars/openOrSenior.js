function openOrSenior(data) {
  const results = [];
  data.forEach((member) => {
    let age = member[0];
    let handicap = member[1];
    age >= 55 && handicap > 7 ? results.push("Senior") : results.push("Open");
  });
  return results;
}
module.exports = openOrSenior;
