<template>
  <form action="">
    <div class="columns">
      <div class="cloumn is-6 is-offset-3">
        <div class="box">
          <div class="p-md">
            <b-field class="p-t-md">
              <b-input
                placeholder="User handle (custom validation for only lowercase)"
                type="text"
                required
                validation-message="Only lowercase is allowed"
                pattern="[a-z]*"
              >
              </b-input>
            </b-field>
          </div>
        </div>
      </div>
    </div>
    <div class="button is-static is-outlined is-success source-icon">
      <span class="icon-news"></span>
    </div>

    <div class="button is-static is-outlined is-warning source-icon">
      <span class="icon-google"></span>
    </div>
    <div class="button is-static is-outlined is-danger source-icon">
      <span class="icon-youtube"></span>
    </div>

    <div class="button is-static is-outlined is-info source-icon">
      <span class="icon-twitter"></span>
    </div>

    <button class="button is-primary">
      <span class="mdi mdi-plus"></span>NEW
    </button>
    <button class="button is-primary">
      <span class="mdi mdi-eye-off"></span>
    </button>
  </form>
</template>

<script>
export default {}
</script>

<style></style>
