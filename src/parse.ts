export default async (url: string, hex = true) => {
  // TODO: 🔧  Check that it is actually a coolors url
  const urlArr = await url.split('/');
  const hexArr = await urlArr[urlArr.length - 1].split('-');
  if (hex) {
    return hexArr.map((num) => `#${num}`);
  } else {
    return hexArr;
  }
};
