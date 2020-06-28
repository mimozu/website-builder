<template>
  <div>
    <h2>Reset Password</h2>

    <p>Follow this link to reset the password for your user:</p>
    <p>
      <a :href="`${siteUrl}/admin/#recovery_token=${token}`">Reset Password</a>
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
