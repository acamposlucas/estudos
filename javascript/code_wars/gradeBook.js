function gradeBook(s1, s2, s3) {
  const scoreMean = (s1 + s2 + s3) / 3;

  if (scoreMean >= 90) {
    return "A";
  } else if (scoreMean >= 80) {
    return "B";
  } else if (scoreMean >= 70) {
    return "C";
  } else if (scoreMean >= 60) {
    return "D";
  } else {
    return "F";
  }
}

module.exports = gradeBook;
