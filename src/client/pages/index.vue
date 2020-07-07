<template>
  <div>
    <nuxt-content :document="page" />
    <app-header :title="page.sitetitle" />

    <hero-image :image="page.image" :tag-line="page.tagline" />

    <div class="page-introduction">
      <div class="page-introduction__content">
        <!-- eslint-disable-next-line -->
        <div v-html="page.intro" class="page-introduction__intro"></div>
        <a
          :href="`mailto:${page.buttonemailaddress}`"
          class="page-introduction__button button"
          >{{ page.buttontext }}</a
        >
      </div>

      <app-footer :socialmedia="page.socialmedia"></app-footer>
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import { stripFileExtension } from '../lib/strip-file-extension.js'

export default {
  async asyncData({ $content, params }) {
    const getFileName = (path) => {
      return path.split('/').pop()
    }

    const getPath = (path) => {
      return path.split('/').slice(0, -1).join('/')
    }

    try {
      const page = await $content('homepage').fetch()
      page.intro = marked(page.intro)
      page.tagline = marked(page.tagline)
      page.image = {
        src: page.file,
        path: getPath(page.file),
        fileName: getFileName(page.file),
        fileNameWithoutExtension: stripFileExtension(getFileName(page.file)),
        alt: page.filedescription
      }

      return {
        page
      }
    } catch (error) {
      console.error(error)
      return false
    }
  },
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.searchenginedescription
        }
      ],
      link: [
        {
          rel: 'preload',
          href: this.page.image.src,
          as: 'image',
          importance: 'high'
        }
      ]
    }
  }
}
</script>

<style>
.button {
  display: inline-block;
  padding: 18px 48px;
  text-align: center;
  background-color: #333;
  color: #fff;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 1px solid rgb(28, 28, 28);
  text-decoration: none;
}

.button:hover {
  color: #fff;
  background-color: #000;
}

.page-introduction__button {
  display: block;
  max-width: 500px;
}

.page-introduction {
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  padding: 60px 20px;
  line-height: 1.5;
}

.page-introduction__intro {
  margin-bottom: 60px;
  font-size: 1.1rem;
}

.page-introduction__content {
  margin-bottom: 72px;
}

@media (min-width: 580px) {
  .page-introduction {
    max-width: 730px;
    margin-left: auto;
    margin-right: auto;
    min-height: 100vh;
    padding-top: 84px;
    padding-bottom: 84px;
    line-height: 1.5;
  }

  .page-introduction__button {
    font-size: 1.4rem;
  }

  .page-introduction__intro {
    font-size: 1.5rem;
  }

  .page-introduction__content {
    margin-bottom: 108px;
  }
}

@media (min-width: 820px) {
  .button {
    transition: transform 0.3s ease;
  }

  .button:hover {
    transform: scale(1.1);
  }
}
</style>
