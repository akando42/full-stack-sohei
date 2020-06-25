<template>
	<section class="hero is-medium sohei-hero">
	    <div class="hero-body">
		    <div class="container">
				<div class="sohei-title">
				    Mastering Full Stack Development
				</div>
				<div class="sohei-animation">
				  <div class="moon"></div>
				  <div class="sea">
				  	<div class="wave"></div>
				  	<div class="wave"></div>
				  	<div class="wave"></div>
				  	<div class="wave"></div>
				  	<div class="wave"></div>
				  	<div class="wave"></div>
				  </div>
				</div>
			    <div class="links">
			      <a
			        href="/lesson"
			        target="_blank"
			        rel="noopener noreferrer"
			        class="sohei-yin"
			      >
			        Login
			      </a>
			      <a
			        href="/signup"
			        target="_blank"
			        rel="noopener noreferrer"
			        class="sohei-yin"
			      >
			        Sign Up
			      </a>
			    </div>

			    <vue-typed :strings="['First text', 'Second Text']">
				  <h1 class="typing"></h1>
				</vue-typed>
		    </div>
	    </div>
    </section>
</template>

<script>
  // import {Carousel, Slide} from 'vue-carousel'
  // import VueTypedJs from 'vue-typed-js'

  // export default {
  // 	components: {
  // 		VueTypedJs,
  // 		// Carousel, 
  // 		// Slide,
  // 	}
  // }

	
</script>

<style>
.hero-body {
	padding-top: 100px !important;
}
.sohei-hero {
  font-family: 'Philosopher';
}

.sohei-title {
  font-family: 'Philosopher', san-serif !important;
  font-size: 45px;
  font-style: 'normal';
}

.sohei-yin {
  background-color: none;
  border-bottom: solid 3px black;
  color: black;
  padding: 10px;
  margin: 0px 20px;
  font-family: 'Philosopher', san-serif !important;
  font-style: 'normal' !important;
  font-weight: 'normal' !important;
  font-size: 30px;
  line-height: 34px;
}

.sohei-animation {
  height: 350px;
  width: 600px;
  margin: 0px auto 0px auto;
}


.moon {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 150px;
  margin: -100px 0 0 -150px;
  border-radius: 300px 300px 0 0;
  background: rgb(248, 121, 121);
  z-index: 999; 
  box-shadow: 0 0 50px rgba(255, 0, 0, 0.5);
  filter: blur(0px) contrast(10);
}

.sea {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 300px;
  margin: -150px 0px 0 -250px;
  filter: blur(20px) contrast(50);
}
	
.wave {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 340px;
  height: 40px;
  margin: 30px 0 0 -170px;
  background: #FF0000;
  border-radius: 100%;
}

.wave:nth-child(2) {
  animation: waving 2000ms infinite linear -500ms;
}
.wave:nth-child(3) {
  animation: waving 2000ms infinite linear -1000ms;
}
.wave:nth-child(4) {
  animation: waving 2000ms infinite linear -1500ms;
}
.wave:nth-child(5) {
  animation: waving 2000ms infinite linear -1500ms;
}
.wave:nth-child(6) {
  animation: waving 2000ms infinite linear -2000ms;
}

@keyframes waving {
  0% {
    transform: translateY(0) scale(1) rotateZ(0);
  }
  50% {
    transform: translateY(80px) scale(0.5) rotateZ(5deg);
  }
  100% {
    transform: translateY(120px) scale(0) rotateZ(-40deg);
  }
}


</style>

