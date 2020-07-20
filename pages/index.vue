<template>
  <div>
    <Banner />
    <Divider />
    <client-only>
      <carousel :data="newData"></carousel>
    </client-only>
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
import CourseSlider from '~/components/CourseSlider.vue'
import LeftFeature from '~/components/LeftFeature.vue'
import RightFeature from '~/components/RightFeature.vue'
import CallToAction from '~/components/CallToAction.vue'
import Slide from '~/components/Slide.vue'

export default {

  // Adding Components
  components: {
    Banner, 
    Divider,
    LeftFeature, 
    RightFeature,
    CourseSlider,
    CallToAction,
  },

  // Adding Netlify Identity Function
  head() {
    return {
      script: [{
        src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
      }],
    };
  },
  data() {
    return {
      carouseldata: [
        {
          id: 1,
          message: 'First message',
          content(createElement, content) {
            return createElement('img', {
              attrs: {
                src: '../assets/courses/vue.jpg',
              }
            })
          }
        },
        {
          id: 2,
          message: 'Any message',
          content(createElement, content) {
            return createElement('img', {
              attrs: {
                src: '../assets/courses/figma.jpg',
              }
            })
          }
        },
        {
          id: 3,
          message: 'Any message',
          content(createElement, content) {
            return createElement('img', {
              attrs: {
                src: '../assets/courses/serverless.jpg',
              }
            })
          }
        }
      ],
      newData: [
          { template: '<Slide slideTitle="Slide 1" />' },
          { template: '<Slide slideTitle="Slide 2" />' },
          { template: '<Slide slideTitle="Slide 3" />' },
      ]
   }
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
