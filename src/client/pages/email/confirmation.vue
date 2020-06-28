<template>
  <div>
    <h2>Confirm your signup</h2>

    <p>Follow this link to confirm your user:</p>
    <p>
      <a href="`${siteUrl}/admin/#confirmation_token=${token}`"
        >Confirm your mail</a
      >
    </p>
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
