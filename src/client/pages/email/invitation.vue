<template>
  <div>
    <h2>You have been invited</h2>

    <p>
      You have been invited to create a user on {{ siteUrl }}. Follow this link
      to accept the invite:
    </p>
    <p><a :href="`/admin/#invite_token=${token}`">Accept the invite</a></p>
  </div>
</template>

<script>
export default {
  computed: {
    siteUrl() {
      return '{{ .SiteURL }}'
    },
    token() {
      return '{{ .Token }}'
    }
  }
}
</script>
