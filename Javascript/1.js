function reverseWord(sentence) {
  const words = sentence.split(" ");
  const reversedWords = words.map((word) => {
    return word.split("").reverse().join("");
  });
  const reversedSentence = reversedWords.join(" ");
  return reversedSentence;
}

const inputSentence = "This is a sunny day";
const reversed = reverseWord(inputSentence);
console.log(reversed);
