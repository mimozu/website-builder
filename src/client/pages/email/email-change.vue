<template>
  <div>
    <h2>Confirm Change of Email</h2>

    <p>
      Follow this link to confirm the update of your email from
      {{ email }} to {{ newEmail }}:
    </p>
    <p>
      <a href="`${siteUrl}/admin/#email_change_token=${token}`">Change Email</a>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    email() {
      return '{{ .Email }}'
    },
    newEmail() {
      return '{{ .NewEmail }}'
    },
    siteUrl() {
      return '{{ .SiteURL }}'
    },
    token() {
      return '{{ .Token }}'
    }
  }
}
</script>
