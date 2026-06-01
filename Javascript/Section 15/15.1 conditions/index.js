function calculateLoveScore() {
  var loveScore = Math.random() * 100;
  loveScore = Math.floor(loveScore) + 1;
  if (loveScore >= 70) {
    alert(loveScore + " yall are soul mates ");
  }
  if (loveScore > 30 && loveScore < 70) {
    alert("your sover is " + loveScore + "%");
  } else {
    alert("your lover sore is " + loveScore + "your not too compatible");
  }
}
