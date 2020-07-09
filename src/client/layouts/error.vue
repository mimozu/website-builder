<template>
  <div>
    <h1 v-if="error.statusCode === 404" class="error-message">
      Oops, that page does not exist. Sorry!
    </h1>
    <h1 v-else class="error-message">Oops, something went wrong. Sorry!</h1>
    <nuxt-link to="/" class="error-link">Back to Homepage</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
</script>

<style>
@import '../components/app-core/general.css';

.error-message {
  width: 75%;
  max-width: 270px;
  margin: 84px auto;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 1.8rem;
  letter-spacing: 0.4px;
  color: #333;
}

.error-link {
  display: block;
  font-size: 1.2rem;
  text-align: center;
}

@media (min-width: 450px) {
  .error-message {
    max-width: 400px;
    font-size: 2rem;
    line-height: 1.2;
  }
}

@media (min-width: 600px) {
  .error-message {
    max-width: 500px;
    font-size: 2.5rem;
  }
}

@media (min-width: 800px) {
  .error-message {
    max-width: 500px;
    font-size: 3.4rem;
  }
}

@media (min-width: 1200px) {
  .error-message {
    max-width: 700px;
    font-size: 4.8rem;
  }
}
</style>
