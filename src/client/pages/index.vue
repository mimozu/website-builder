<template>
  <div>
    <nuxt-content :document="page" />
    <app-header :title="page.sitetitle" />

    <hero-image
      :image-src="page.file"
      :image-alt="test"
      :tag-line="page.tagline"
    />

    <div class="text">
      <!-- eslint-disable-next-line -->
      <div v-html="page.intro" class="text__intro"></div>
      <a href="mailto:test@test.com" class="text__button button">{{
        page.buttontext
      }}</a>
    </div>

    <app-footer :socialmedia="page.socialmedia"></app-footer>
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
html {
  font-family: 'Source Sans Pro';
  font-weight: 400;
}

p {
  margin-bottom: 24px;
}

strong {
  font-weight: 600;
}

.button {
  display: inline-block;
  padding: 18px 48px;
  text-align: center;
  background-color: rgb(28, 28, 28);
  color: rgb(137, 113, 111);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 1px solid rgb(28, 28, 28);
  text-decoration: none;
}

.text {
  min-height: 50vh;
  padding: 60px 20px 20px 20px;
  font-size: 1.2rem;
  line-height: 1.45;
  background-color: #886961;
  color: #cdbbb4;
}

.text__intro {
  margin-bottom: 48px;
}

.text__button {
  width: 100%;
  margin-bottom: 48px;
}
</style>
