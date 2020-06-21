const parse = (url: string, hex: boolean | null = true): string[] => {
  // TODO: 🔧  Check that it is actually a coolors url
  const urlArr = url.split('/');
  const hexArr = urlArr[urlArr.length - 1].split('-');
  if (hex) {
    return hexArr.map((num) => `#${num}`);
  } else {
    return hexArr;
  }
};

export default parse;
