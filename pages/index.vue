<template>
  <div>
    <Banner />
    <Divider />
    <LeftFeature />
    <Divider />
    <RightFeature />
    <Divider />
    <CallToAction />
  </div>
</template>
<script>

import Banner from '~/components/Banner.vue'
import Divider from '~/components/Divider.vue'
import LeftFeature from '~/components/LeftFeature.vue'
import RightFeature from '~/components/RightFeature.vue'
import CallToAction from '~/components/CallToAction.vue'

export default {
  // Adding Components
  components: {
    Banner, 
    Divider,
    LeftFeature, 
    RightFeature,
    CallToAction,
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
.my-container {
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
