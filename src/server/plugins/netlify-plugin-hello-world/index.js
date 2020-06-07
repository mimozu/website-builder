import jimp from 'jimp'

module.exports = {
  onPreBuild: async ({ utils }) => {
    console.log('Hello world from onPreBuild event!')
    try {
      const image = await jimp.read('../client/static/images/jump.jpg')
      await image.resize(150, jimp.AUTO)
      await image.writeAsync('../client/static/images/jump-150w.jpg')
    } catch (error) {
      utils.build.failBuild(
        'Failure message from netlify-plugin-hello-worldddd',
        { error }
      )
    }
  }
}
