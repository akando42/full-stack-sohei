<template>
  <div>
    <Banner /> 
    <section class="section">
      <div class="container">
        <div class="links">
          <a
            href="/lesson"
            target="_blank"
            rel="noopener noreferrer"
            class="button--green"
          >
            Free Guides
          </a>
          <a
            href="/signup"
            target="_blank"
            rel="noopener noreferrer"
            class="button--grey"
          >
            Get Pro Access
          </a>
        </div>
      </div>
    </section>
  </div>
</template>
<script>

import Banner from '~/components/Banner.vue'

export default {
  // Adding Components
  components: {
    Banner
  },

  // Adding the Netlify Identity
  head() {
    return {
      script: [{
        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
      }],
    };
  }

  
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
