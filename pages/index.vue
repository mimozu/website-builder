<template>
  <div class="hero">
    <img class="hero__img" :src="file" alt="test" />
    <!-- <div class="container">
      <div>
        <h3 class="title">
          {{ title }}
        </h3>
      </div>
      <div v-html="html"></div>
    </div> -->
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const post = await import(`~/content/homepage.md`)
    console.log('post', post)
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
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;
}

.hero__img {
  width: 100%;
  object-fit: cover;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
