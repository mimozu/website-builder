const vfile = require('to-vfile')
const matter = require('vfile-matter')

export default function() {
  const file = vfile.readSync('content/homepage.md')
  matter(file)
  const { matter: frontmatter } = file.data
  return frontmatter
}
