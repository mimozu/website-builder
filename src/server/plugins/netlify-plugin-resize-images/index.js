const path = require('path')
const fs = require('fs')
const jimp = require('jimp')
const sharp = require('sharp')

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
      const sizes = [600, 960, 1280, 1920]
      const files = await getFilesFromDir(directoryPath)

      for (let indexFiles = 0; indexFiles < files.length; indexFiles++) {
        for (let indexSizes = 0; indexSizes < sizes.length; indexSizes++) {
          const image = await jimp.read(`${directoryPath}/${files[indexFiles]}`)
          await image.resize(sizes[indexSizes], jimp.AUTO)
          await image.writeAsync(
            `${directoryPath}/${stripExtension(files[indexFiles])}-${
              sizes[indexSizes]
            }w.jpg`
          )
          await sharp(`${directoryPath}/${files[indexFiles]}`)
            .webp({
              lossless: true
            })
            .toFile('output.webp')
        }
      }
      console.log(files)
    } catch (error) {
      return utils.build.failPlugin(
        `(netlify-plugin-resize-images) something went wrong: ${error} `
      )
    }
  }
}
