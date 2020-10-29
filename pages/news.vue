<template>
  <div>
    <mainheader theme="dark" />
    <section>
      <div class="container p-sm">
        <article class="media vcenter">
          <div class="media-left">
            <div class="button is-static is-outlined source-icon is-success">
              <span class="icon-news has-text-success"></span>
            </div>
          </div>
          <div class="media-content">
            <div class="content">
              <h1 class="has-text-weight-medium is-marginless">NEWS</h1>
            </div>
          </div>
        </article>
        <div>
          <p class="m-t-lg m-b-lg has-text-weight-light">
            Last update: 9 hours ago
          </p>
        </div>
        <article class="media">
          <div class="media-left width3">
            <p class="is-size-4">
              1
              <span class="lt-icon icon-up has-text-success"></span>
            </p>
          </div>
          <figure class="media-left">
            <p class="image is-96x96">
              <a href="">
                <span class="tag is-link badge">NEW</span>
                <img
                  src="https://storage.googleapis.com/trendimageseu/tr-news-1603845060-1.jpg"
                  alt=""
                  class="is-radius"
              /></a>
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <h4 class="has-text-weight-medium">başlık</h4>
              <span>Son dakika haberi</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import mainheader from '@/components/mainheader'
export default {
  name: 'News',
  components: {
    mainheader
  },
  head() {
    return {
      title: 'News'
    }
  }
}
</script>

<style scoped></style>
