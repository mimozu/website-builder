const fs = require('fs')
const fsPromises = fs.promises

module.exports = async function (file, data) {
  try {
    return await fsPromises.writeFile(file, data, 'utf-8')
  } catch (error) {
    console.error('Error occured while writing JSON file', error)
  }
}
