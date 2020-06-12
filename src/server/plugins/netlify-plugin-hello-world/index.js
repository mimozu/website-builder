const path = require('path')
const fs = require('fs')
const jimp = require('jimp')

module.exports = {
  onPreBuild: async ({ utils }) => {
    const directoryPath = path.join(
      __dirname,
      '..',
      '..',
      '..',
      'client/static/images/uploads'
    )
    console.log('Hello world from onPreBuild event!. Path is ', directoryPath)
    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        return console.log('Unable to check folder', err)
      }
      console.log(files)
    })

    try {
      const image = await jimp.read('src/client/static/images/uploads/jump.jpg')
      await image.resize(150, jimp.AUTO)
      await image.writeAsync('src/client/static/images/uploads/jump-150w.jpg')
    } catch (error) {
      utils.build.failBuild(
        'Failure message from netlify-plugin-hello-worldddd',
        { error }
      )
    }
  }
}
