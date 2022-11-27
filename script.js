function generate() {
  const quotes = {
    "- Nelson Mandela":
      '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
    "- Steve Jobs":
      '"Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma – which is living with the results of other peoples thinking."',
    "- Maya Angelou":
      '"You will face many defeats in life, but never let yourself be defeated."',
    "- Dalai Lama": '"The purpose of our lives is to be happy."',
  };

  const authors = Object.keys(quotes);

  console.log(authors);
}
