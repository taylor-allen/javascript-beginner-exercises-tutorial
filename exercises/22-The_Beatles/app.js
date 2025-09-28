function sing() {
  let lyrics = "";
  for (let i = 1; i <= 10; i++) {
    lyrics += "let it be";
    if (i === 4) {
      lyrics += ", there will be an answer";
    } else if (i === 9) {
      lyrics += ", whisper words of wisdom";
    }
    if (i < 10) {
      lyrics += ", ";
    }
  }
  return lyrics;
}

//Your code above ^^^

console.log(sing());
