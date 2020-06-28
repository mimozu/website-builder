<template>
  <div>
    <h2>Confirm your signup</h2>

    <p>Follow this link to confirm your user:</p>
    <p>
      <a href="{{{ .SiteURL }}}/admin/#confirmation_token={{{ .Token }}}"
        >Confirm your mail</a
      >
    </p>
  </div>
</template>

<script>
export default {}
</script>
