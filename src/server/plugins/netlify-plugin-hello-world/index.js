const path = require('path')
const fs = require('fs')
const jimp = require('jimp')
const directoryPath = path.join(
  __dirname,
  '..',
  '..',
  '..',
  'client/static/images/uploads'
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

      files.forEach(async (file) => {
        try {
          console.log(
            'resized image path',
            `${directoryPath}/${stripExtension(file)}-${sizes[1]}w.jpg`
          )
          const image = await jimp.read(`${directoryPath}/${file}`)
          await image.resize(sizes[1], jimp.AUTO)
          await image.writeAsync(
            `${directoryPath}/${stripExtension(file)}-${sizes[1]}w.jpg`
          )
          console.log(
            'files from dir',
            await getFilesFromDir(directoryPath).catch(console.error)
          )
        } catch (error) {
          console.error(error)
        }
      })
    } catch (error) {
      utils.build.failBuild('Failure message from netlify-plugin-hello-world', {
        error
      })
    }
  }
}
