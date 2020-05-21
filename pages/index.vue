<template>
  <div>
    <div class="hero">
      <img class="hero__img" :src="file" alt="test" />
      <div class="hero__content">
        <h3 class="title">
          {{ title }}
        </h3>
      </div>
    </div>
    <div class="text"><div v-html="html"></div></div>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const post = await import(`~/content/homepage.md`)
    const attr = post.attributes
    const { title, file } = attr

    return {
      title,
      file,
      html: post.html
    }
  }
}
</script>

<style>
.hero {
  position: relative;
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
  padding-left: 24px;
  padding-right: 24px;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  color: #ffffff;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 2rem;
  letter-spacing: 1px;
  color: #57332d;
}

.text {
  min-height: 50vh;
  padding: 48px 24px;
  background-color: #886961;
  color: #cdbbb4;
}

@media (min-width: 700px) {
  .hero__img {
    height: 100vh;
  }
}

@media (min-width: 1600px) {
  .hero__img {
    height: 90vh;
  }
}
</style>
