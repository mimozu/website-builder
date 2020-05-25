<template>
  <div>
    <app-header :title="sitetitle" />

    <section class="hero">
      <img class="hero__img" :src="file" alt="test" />
      <div class="hero__readable"></div>

      <div class="hero__content">
        <!-- eslint-disable-next-line -->
        <h3 class="hero__tagline" v-html="tagline"></h3>
      </div>
    </section>

    <div class="text">
      <!-- eslint-disable-next-line -->
      <div v-html="intro" class="text__intro"></div>
      <a href="mailto:test@test.com" class="text__button button">{{
        buttontext
      }}</a>
    </div>
  </div>
</template>

<script>
import processMarkdown from '../lib/process-markdown.js'
import appHeader from '../components/app-header/app-header.vue'

export default {
  components: { appHeader },
  async asyncData({ params }) {
    try {
      const data = await processMarkdown()
      const { sitetitle, tagline, buttontext, intro, file } = data

      return {
        sitetitle,
        tagline,
        buttontext,
        intro,
        file
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
  border: 1px solid rgb(28, 28, 28);
  border-radius: 6px;
  text-decoration: none;
}

.hero {
  position: relative;
}

.hero__readable {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
}

.hero__img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.hero__content {
  position: absolute;
  top: 0;
  min-height: 100vh;
  padding-left: 20px;
  padding-right: 20px;
  color: #ffffff;
}

.hero__tagline {
  margin-top: 36px;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 2rem;
  max-width: 310px;
  letter-spacing: 0.5px;
  color: #fff;
}

.text {
  min-height: 50vh;
  padding: 60px 20px;
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

@media (min-width: 600px) {
  .hero__tagline {
    margin-left: 24px;
    max-width: 500px;
    font-size: 2.5rem;
  }
}

@media (min-width: 800px) {
  .hero__img {
    height: 100vh;
    /* object-position: 100% 25%; */
  }

  .hero__tagline {
    font-size: 3rem;
  }
}

@media (min-width: 1600px) {
  .hero__img {
    height: 90vh;
  }
}
</style>
