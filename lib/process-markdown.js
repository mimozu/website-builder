const vfile = require('to-vfile')
const matter = require('vfile-matter')
const marked = require('marked')

export default function() {
  const file = vfile.readSync('content/homepage.md')
  matter(file)
  const { matter: frontmatter } = file.data

  return {
    sitetitle: frontmatter.sitetitle,
    tagline: marked(frontmatter.tagline),
    intro: marked(frontmatter.intro),
    buttontext: frontmatter.buttontext,
    file: frontmatter.file
  }
}
