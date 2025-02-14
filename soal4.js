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
    .sort((a, b) => b.localeCompare(a))
    .map((word) => word.toLocaleUpperCase())
    .concat('FAZZTRACK')
    .reverse()
    .join(' ')
  console.log(newText)
}

transformSentence('saya belajar javascript')
transformSentence('bbb ccc aaa')
// transformSentence('golang belajar javascript')
