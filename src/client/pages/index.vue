<template>
  <div>
    <nuxt-content :document="page" />
    <app-header :title="page.sitetitle" />

    <hero-image
      :image-src="page.file"
      :image-alt="page.filedescription"
      :tag-line="page.tagline"
    />

    <div class="page-introduction">
      <div class="footer-home__introduction">
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
import appHeader from '../components/app-header/app-header.vue'
import appFooter from '../components/app-footer/app-footer.vue'
import heroImage from '../components/hero-image/hero-image.vue'

export default {
  components: { appFooter, appHeader, heroImage },
  async asyncData({ $content, params }) {
    try {
      const page = await $content('homepage').fetch()
      page.intro = marked(page.intro)
      page.tagline = marked(page.tagline)

      return {
        page
      }
    } catch (error) {
      console.error(error)
      return false
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
  transition: transform 0.3s ease;
}

.button:hover {
  transform: scale(1.1);
  color: #fff;
  background-color: #000;
}

.page-introduction__button {
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  margin-bottom: 48px;
}

.page-introduction {
  max-width: 870px;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  padding: 84px 60px;
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.5;
}

.page-introduction__intro {
  margin-bottom: 60px;
}

.footer-home__introduction {
  margin-bottom: 120px;
}
</style>
