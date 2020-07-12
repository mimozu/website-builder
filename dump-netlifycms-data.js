const convertMarkdownToJson = require('./src/client/lib/convert-markdown-to-json.js')
const writeJsonToFile = require('./src/client/lib/write-json-to-file.js')

async function main() {
  const settingsJson = JSON.stringify(
    await convertMarkdownToJson('src/client/content/settings.md')
  )
  const homepageJson = JSON.stringify(
    await convertMarkdownToJson('src/client/content/homepage.md')
  )

  await writeJsonToFile('./src/client/static/data/settings.json', settingsJson)
  await writeJsonToFile('./src/client/static/data/homepage.json', homepageJson)
}

main()
