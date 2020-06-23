<template>
  <section class="hero-image">
    <img
      class="hero-image__img"
      :src="image.src"
      :alt="image.alt"
      sizes="(min-width: 1440px) 1500px, (min-width: 1336px) 1340px,(min-width:
      768px) 800px, 600px"
      :srcset="srcSetNetlifyLargeMedia"
    />
    <div class="hero-image__readable"></div>

    <div class="hero-image__content">
      <!-- eslint-disable-next-line -->
      <h2 class="hero-image__tagline" v-html="tagLine"></h2>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    image: {
      type: Object,
      required: true
    },
    tagLine: {
      type: String,
      required: true
    }
  },
  computed: {
    srcSet() {
      return `
        /images/uploads/${this.image.fileNameWithoutExtension}-600w.jpg 600w,
        /images/uploads/${this.image.fileNameWithoutExtension}-960w.jpg 960w,
        /images/uploads/${this.image.fileNameWithoutExtension}-1280w.jpg 1280w,
        /images/uploads/${this.image.fileNameWithoutExtension}-1920w.jpg 1920w
      `
    },
    srcSetNetlifyLargeMedia() {
      return `
        ${this.image.src}.jpg?nf_resize=fit&w=600 600w,
        ${this.image.src}.jpg?nf_resize=fit&w=960 960w,
        ${this.image.src}.jpg?nf_resize=fit&w=1280 1280w,
        ${this.image.src}.jpg?nf_resize=fit&w=1920 1920w
      `
    }
  }
}
</script>

<style>
.hero-image {
  position: relative;
}

.hero-image__readable {
  position: absolute;
  top: 0;
  width: 100%;
  height: 75vh;
  background-color: rgba(0, 0, 0, 0.2);
}

.hero-image__img {
  display: block;
  width: 100%;
  height: 75vh;
  object-fit: cover;
  object-position: 65%;
}

.hero-image__content {
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  height: 75vh;
  padding-left: 20px;
  padding-right: 20px;
  color: #ffffff;
}

.hero-image__tagline {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 1.8rem;
  width: 75%;
  max-width: 270px;
  letter-spacing: 0.4px;
  color: #fff;
}

@media (max-height: 400px) {
  .hero-image__readable,
  .hero-image__img,
  .hero-image__content {
    height: 700px;
  }
}

@media (min-width: 450px) {
  .hero-image__tagline {
    max-width: 400px;
    font-size: 2rem;
    line-height: 1.2;
  }
}

@media (min-width: 600px) {
  .hero-image__tagline {
    max-width: 500px;
    font-size: 2.5rem;
  }

  .hero-image__content {
    padding-left: 48px;
  }
}

@media (min-width: 800px) {
  .hero-image__img,
  .hero-image__content,
  .hero-image__readable {
    height: 100vh;
    /* object-position: 100% 25%; */
  }

  .hero-image__tagline {
    max-width: 500px;
    font-size: 3.4rem;
  }
}

@media (min-width: 1200px) {
  .hero-image__tagline {
    max-width: 700px;
    margin-left: 120px;
    font-size: 4.8rem;
  }
}

@media (min-width: 1600px) {
  .hero-image__img {
    height: 90vh;
  }
}
</style>
