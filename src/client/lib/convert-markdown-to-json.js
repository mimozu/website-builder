module.exports = function (path) {
  const vfile = require('to-vfile')
  const vileMatter = require('vfile-matter')
  const frontmatter = vfile.readSync(path)
  vileMatter(frontmatter)

  const {
    data: { matter } = { matter: 'No frontmatter available' }
  } = frontmatter

  return Promise.resolve(matter)
}
