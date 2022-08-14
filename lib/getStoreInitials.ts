function getFirstChar(letter: string) {
  const splitLetter = letter.split("");
  const firstChar = splitLetter[0];
  return firstChar;
}

export default function getStoreInitials(storeName: string) {
  const splitStoreName = storeName.split(" ");
  const getFirstThreeWords = splitStoreName.slice(0, 3);
  const first3WordChar: string[] = [];
  getFirstThreeWords.map((item) => {
    const word = getFirstChar(item);
    first3WordChar.push(word);
  });

  let storeInitials = "";
  first3WordChar.map((text) => {
    storeInitials += `${text} `;
  });
  console.log("storeInitials", storeInitials);
  return storeInitials;
}
