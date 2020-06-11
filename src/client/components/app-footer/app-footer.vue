<template>
  <footer class="app-footer">
    <ul class="flat-list">
      <li
        v-for="(item, index) in socialmedia"
        :key="index"
        class="flat-list__item"
      >
        <a
          :href="platformUrl(item.platform, item.username)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <icon-base
            width="24"
            height="24"
            viewbox="0 0 24 24"
            :icon-name="item.platform"
            ><component :is="`icon-${item.platform}`"></component></icon-base
        ></a>
      </li>
    </ul>
  </footer>
</template>

<script>
import iconBase from '../icon-base/icon-base.vue'
import iconInstagram from '../icons/icon-instagram.vue'
import iconTwitter from '../icons/icon-twitter.vue'
import iconFacebook from '../icons/icon-facebook.vue'
import iconYoutube from '../icons/icon-youtube.vue'
import iconPinterest from '../icons/icon-pinterest.vue'
import iconLinkedin from '../icons/icon-linkedin.vue'

export default {
  components: {
    iconBase,
    iconFacebook,
    iconInstagram,
    iconLinkedin,
    iconPinterest,
    iconTwitter,
    iconYoutube
  },
  props: {
    socialmedia: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      urls: {
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        facebook: 'https://facebook.com',
        pinterest: 'https://pinterest.com',
        youtube: 'https://youtube.com',
        linkedin: 'https://linkedin.com'
      }
    }
  },
  methods: {
    platformUrl(platform, username) {
      console.log(`${this.urls[platform]}/${username}`)
      return `${this.urls[platform]}/${username}`
    }
  }
}
</script>

<style>
.app-footer {
  padding-bottom: 72px;
  background-color: #886961;
}

.flat-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
}

.flat-list__item {
  flex: 0 0 16px;
}

.flat-list__item:not(:first-child) {
  margin-left: 24px;
}
</style>
