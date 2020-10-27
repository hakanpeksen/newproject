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
    <div class="button is-static is-outlined is-info source-icon">
      <span class="icon-send"></span>
    </div>
    <div class="button is-static is-outlined is-info source-icon">
      <span class="icon-share"></span>
    </div>
    <div class="button is-static is-outlined is-info source-icon">
      <span class="icon-email"></span>
    </div>
    <div class="button is-static is-outlined is-info source-icon">
      <span class="icon-comment"></span>
    </div>
    <span class="yt-icon icon-like"></span>
    <span class="yt-icon icon-dislike"></span>
    <div class="source-icon"><span class="icon-plus"></span></div>
    <div class="source-icon"><span class="icon-minus"></span></div>
    <div class="source-icon"><span class="icon-check"></span></div>
    <div class="source-icon"><span class="icon-close"></span></div>
    <div class="source-icon"><span class="icon-trash"></span></div>

    <button class="button is-primary">
      <span class="mdi mdi-plus"></span>NEW
    </button>
    <button class="button is-primary">
      <span class="mdi mdi-check"></span>
    </button>
    <button class="button is-primary">
      <span class="mdi mdi-close"></span>
    </button>
    <button class="button is-primary">
      <span class="mdi mdi-remove"></span>
    </button>

    <button class="button is-primary">
      <span class="mdi mdi-eye-off"></span>
    </button>
    <span class="lt-icon icon-left"></span>

    <span class="lt-icon icon-right"></span>
    <span class="lt-icon icon-up"></span>
    <span class="lt-icon icon-down"></span>
  </form>
</template>

<script>
export default {}
</script>

<style></style>
