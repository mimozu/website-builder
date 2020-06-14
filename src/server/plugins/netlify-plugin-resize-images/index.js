const path = require('path')
const fs = require('fs')
const jimp = require('jimp')
const imagemin = require('imagemin')
const imageminWebp = require('imagemin-webp')

const directoryPath = path.join(
  __dirname,
  '../../../client/static/images/uploads'
)

async function getFilesFromDir(folderPath) {
  try {
    return await fs.promises.readdir(folderPath)
  } catch (error) {
    console.error(error)
  }
}

function stripExtension(fileName) {
  const file = fileName.split('.')
  if (file.length === 2) {
    return file[0]
  }
  console.error('stripExtension(): Error splitting extension from file name.')
}

module.exports = {
  onPreBuild: async ({ utils }) => {
    try {
      const sizes = [150, 500, 900, 1200, 1900]
      const files = await getFilesFromDir(directoryPath).catch(console.error)

      for (let indexFiles = 0; indexFiles < files.length; indexFiles++) {
        for (let indexSizes = 0; indexSizes < sizes.length; indexSizes++) {
          const image = await jimp.read(`${directoryPath}/${files[indexFiles]}`)
          await image.resize(sizes[indexSizes], jimp.AUTO)
          await image.writeAsync(
            `${directoryPath}/${stripExtension(files[indexFiles])}-${
              sizes[indexSizes]
            }w.jpg`
          )
        }
      }

      // Convert images in directory to WebP
      const filesConvertedToWebP = await imagemin([directoryPath], {
        destination: directoryPath,
        plugins: [imageminWebp({ quality: 50 })]
      })
      console.log('folder list', await getFilesFromDir(directoryPath))
      console.log('files converted to webp', filesConvertedToWebP)
    } catch (error) {
      return utils.build.failPlugin(
        'netlify-plugin-resize-images: something went wrong with resizing images'
      )
    }
  }
}
