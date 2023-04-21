function formatCode(code) {
  if (typeof code !== 'string') {
    return new TypeError(`${code} is not a string`)
  }

  const matchList = code
    .trim()
    .split('\n')
    .map((item) => {
      return item.match(/^(\s*)/)
    })
  const lenList = matchList.map((item) => item[1].length).filter((len) => len !== 0)
  const minLen = Math.min(...lenList)

  const res = matchList
    .map((item) => {
      if (item[1].length) {
        return item.input.slice(minLen)
      } else {
        return item.input
      }
    })
    .join('\n')

  // console.log(res)
  return res
}

export default { formatCode }
