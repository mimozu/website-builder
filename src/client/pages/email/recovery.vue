<template>
  <div>
    <h2>Reset Password</h2>

    <p>Follow this link to reset the password for your user:</p>
    <p>
      <a href="{{ .SiteURL }}/admin/#recovery_token={{ .Token }}"
        >Reset Password</a
      >
    </p>
  </div></template
>

<script>
export default {}
</script>
