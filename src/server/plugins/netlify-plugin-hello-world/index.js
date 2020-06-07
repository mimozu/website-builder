const jimp = require('jimp')

module.exports = {
  onPreBuild: async ({ utils }) => {
    console.log('Hello world from onPreBuild event!')
    try {
      const image = await jimp.read('/src/client/static/images/jump.jpg')
      await image.resize(150, jimp.AUTO)
      await image.writeAsync('/src/client/static/images/jump-150w.jpg')
    } catch (error) {
      utils.build.failBuild(
        'Failure message from netlify-plugin-hello-worldddd',
        { error }
      )
    }
  }
}
