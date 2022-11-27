function generate() {
  const quotes = {
    "- Nelson Mandela":
      '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
    "- Steve Jobs":
      '"Your time is limited, so dont waste it living someone elses life. Dont be trapped by dogma – which is living with the results of other peoples thinking."',
    "- Maya Angelou":
      '"You will face many defeats in life, but never let yourself be defeated."',
    "- Dalai Lama": '"The purpose of our lives is to be happy."',
    "- Bob Marley": '"Love the life you live. Live the life you love."',
    "- James Cameron":
      '"If you set your goals ridiculously high and its a failure, you will fail above everyone elses success."',
    "- Frida Kahlo":
      '"It is not worthwhile to leave this world without having had a little fun in life."',
    "- Deepak Chopra":
      '"Always go with your passions. Never ask yourself if its realistic or not."',
    "- Oprah Winfrey":
      "“Do the one thing you think you cannot do. Fail at it. Try again. Do better the second time. The only people who never tumble are those who never mount the high wire. This is your moment. Own it.”",
    "- Gary Vaynerchuck":
      "“Without hustle, talent will only carry you so far.”",
    "- Yogi Berra":
      "“You got to be careful if you don’t know where you’re going, because you might not get there.”",
    "- Bruce Lee":
      "“The successful warrior is the average man, with laser-like focus.”",
    "- Cristiano Ronaldo":
      "“We dont want to tell our dreams. We want to show them.”",
    "- Coco Chanel":
      "“In order to be irreplaceable one must always be different.”",
    "Chadwick Boseman":
      "“Receiving an award for playing a superhero is amazing, but it’s even greater to acknowledge the heroes that we have in real life,”",
    "- Kobe Bryant":
      "“Its the one thing you can control. You are responsible for how people remember you—or dont. So dont take it lightly.”",
    "- Sir David Attenborough":
      '"It seems to me that the natural world is the greatest source of excitement; the greatest source of visual beauty; the greatest source of intellectual interest. It is the greatest source of so much in life that makes life worth living."',
    "Usain Bolt":
      "“ The difference between the impossible and the possible lies in determination.”",
    "Tom Hanks":
      '"I try to do what I call the three Es — educate, entertain, and enlighten."',
  };

  const authors = Object.keys(quotes);

  const author = authors[Math.floor(Math.random() * authors.length)];

  const quote = quotes[author];

  // display quote when button clicked
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}
