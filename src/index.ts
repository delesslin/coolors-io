export const parse = async (url: string, hex = true) => {
  // TODO: 🔧  Check that it is actually a coolors url
  const urlArr = await url.split('/')
  const hexArr = await urlArr[urlArr.length - 1].split('-')
  if (hex) {
    return hexArr.map((num) => `#${num}`)
  } else {
    return hexArr
  }
}

const isValid = (str: string) => {
  // TODO: 🔧  check that it is a valid coolors string e.g 6 or 3 chars
  // TODO: 🔧 Validate that each char is a valid hex char (0-6, a-f)

  if (str.length === 6) {
    return true
  }
  return false
}
export const gen = async (arr: string[]) => {
  // TODO: 🔧 Ensure arr isn't longer than 10
  try {
    return arr.reduce((acc, curr, i) => {
      // TODO: 🔧 handle strings that start with #
      // if curr contains # it will be returned without #, otherwise curr is simply returned
      let str = curr.split('#').pop()!
      if (!isValid(str)) throw new Error(`${str} is not a valid hex value`)
      if (i < arr.length - 1) {
        return `${acc}${str}-`
      } else {
        return `${acc}${str}`
      }
    }, 'https://coolors.co/')
  } catch (e) {
    console.error(e)
  }
}
