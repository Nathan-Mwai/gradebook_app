function getAverage(scores) {
  let sum = 0;
  for (const score of scores) {
    sum += score;
  }
  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return `A++`;
  } else if (score >= 90 && score <= 99) {
    return `A`;
  } else if (score >= 80 && score <= 89) {
    return `B`;
  } else if (score >= 70 && score <= 79) {
    return `C`;
  } else if (score >= 60 && score <= 69) {
    return `D`;
  } else {
    return `F`;
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== `F`;
}

function studentMsg(totalScores, studentScore) {
    let course = `You passed the course.`
    if(!hasPassingGrade(studentScore)){
        course = `You failed the course.`
    }
  return (
    `Class Average:` +
    getAverage(totalScores) +
    `. Your grade:`  +
     getGrade(studentScore) +`. ` + course
  );
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 87));

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));