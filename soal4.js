const transformSentence = (sentence) => {
  if (typeof sentence != 'string') {
    console.log('inputan harus string')
    return
  }
  if (sentence.length <= 0) {
    console.log('inputan harus lebih dari 0')
    return
  }
  const newText = sentence
    .split(' ')
    .concat('FAZZTRACK')
    .sort()
    .join(' ')
    .toLocaleUpperCase()
  console.log(newText)
}

transformSentence('saya belajar javascript')
