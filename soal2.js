const movie = {
  id: 1,
  title: 'batman',
  image: 'batman.jpg',
  genre: ['superhero', 'aksi'],
  cast: [
    {
      name: 'wahyu',
      role: 'sound',
    },
    {
      name: 'sandi',
      role: 'pg',
    },
  ],

  getDataA: function () {
    console.log(
      `judul: ${this.title}, gambar: ${this.image}, genre: ${
        (this.genre[0], this.genre[1])
      }`
    )
  },
  getCastAsc: function () {
    console.log(
      this.cast.sort((a, b) => {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0
      })
    )
  },
  setTitle: function (newTitle) {
    if (typeof newTitle != 'string') {
      console.log('judul harus string')
      return
    }
    this.title = newTitle
  },
  setImage: function (newImage) {
    if (typeof newImage != 'string') {
      console.log('inputan harus string')
      return
    }
    this.image = newImage
  },
}

movie.getDataA()
movie.getCastAsc()
movie.setTitle('budi')
movie.setImage('gambarBudi.jgp')
