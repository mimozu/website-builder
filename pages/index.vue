<template>
  <div class="container">
    <div>
      <h3 class="title">
        {{ title }}
      </h3>
    </div>
    <p>{{ intro }}</p>
    <p>
      v-html:
    </p>
    <div v-html="html"></div>
    <p>html: {{ html }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const post = await import(`~/content/homepage.md`)
    const attr = post.attributes

    const { title, intro } = attr

    return {
      title,
      intro,
      html: post.html
    }
  }
}
</script>

<style>
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
