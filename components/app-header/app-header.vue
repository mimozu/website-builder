<template>
  <header class="app__header">
    <h1 class="app-header__title">{{ title }}</h1>
    <ul class="flat-list">
      <li
        v-for="(item, index) in socialmedia"
        :key="index"
        class="flat-list__item"
      >
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <icon-base width="24" height="24" :icon-name="item.platform"
            ><component :is="`icon-${item.platform}`"></component></icon-base
        ></a>
      </li>
    </ul>
  </header>
</template>

<script>
import iconBase from '../icon-base/icon-base.vue'
import iconInstagram from '../icons/icon-instagram.vue'
import iconTwitter from '../icons/icon-twitter.vue'
import iconFacebook from '../icons/icon-facebook.vue'

export default {
  components: { iconBase, iconFacebook, iconInstagram, iconTwitter },
  props: {
    title: {
      type: String,
      required: true
    },
    socialmedia: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
.app__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  color: #cdbbb4;
  background-color: rgb(28, 28, 28);
  /* background-color: #886961; */
}

.app-header__title {
  flex-basis: 60%;
  padding-right: 12px;
  font-size: 1rem;
  font-weight: 600;
}

.flat-list {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-basis: 40%;
  list-style: none;
}

.flat-list__item {
  flex: 0 0 16px;
  margin-left: 12px;
}

/* .flat-list__item svg {
  display: block;
  width: 100%;
  height: auto;
  max-width: 24px;
} */

.flat-list__item svg path {
  fill: #cdbbb4;
}
</style>
