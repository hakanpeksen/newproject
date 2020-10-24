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
    <button class="button is-primary">button</button>
  </form>
</template>

<script>
export default {}
</script>

<style></style>
