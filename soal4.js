const transformSentence = (sentence) => {
  if (typeof sentence != 'string') {
    console.log('inputan harus string')
    return
  }
  if (sentence.length <= 0) {
    console.log('inputan harus lebih dari 0')
    return
  }
  //   const newText = sentence
  //     .split(' ')
  //     .concat('FAZZTRACK')
  //     .sort()
  //     .join(' ')
  //     .toLocaleUpperCase()
  //   console.log(newText)

  const newText = sentence
    .split(' ')
    .sort((a, b) => {
      if (a < b) {
        return -1
      }
      if (a > b) {
        return 1
      }
      return 0
    })
    .map((word) => word.toLocaleUpperCase())
  newText.push('FAZZTRACK')
  newText.reverse().join(' ')
  console.log(newText)
}

transformSentence('saya belajar javascript')
transformSentence('bbb ccc aaa')
// transformSentence('golang belajar javascript')
