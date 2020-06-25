<template>
  <div class="container">
    <nav class="navbar sohei-nav" role="navigation" aria-label="main navigation">
    	<div class="navbar-brand">
    		<a class="navbar-item" href="/">
    			<Logo class="branding-logo" />
    		</a>
    		<a 
    		    role="button" 
    		    class="navbar-burger burger" 
    		    aria-label="menu" 
    		    aria-expaned="false"
    		    data-target="navbarFullStackSohei"
    		>
    		    <span aria-hidden="true"></span>
    		    <span aria-hidden="true"></span>
    		    <span aria-hidden="true"></span>
    		</a>
    	</div>
    	<div id="navbarFullStackSohei" class="navbar-menu">
    		<div class="navbar-start sohei-menu">
    			<div class="navbar-item">
    		        About  
    		    </div>
    		    <div class="navbar-item has-dropdown is-hoverable">
    		        <a class="navbar-link">Courses</a> 
    		        <div class="navbar-dropdown">
    		        	<a class="navbar-item">
    		        		Design With Figma
    		        	</a>
    		        	<a class="navbar-item">
    		        		Frontend With NuxtJS and VueJS
    		        	</a>
    		        	<a class="navbar-item">
    		        		Backend Microservices With Netlify Functions & FaunaDB
    		        	</a>
    		        </div>  
    		    </div>
    		    <div class="navbar-item">
    		        Pricing
    		    </div>
    		</div>
          <div class="navbar-end">
          	<div class="navbar-item">
          		<div class="buttons">
          			<a class="button sohei-button">
          		    	<strong> Log in</strong>
          		    </a>
          		</div>
          	</div>
          	<div class="navbar-item">
          		<div class="buttons">
          		    <a class="button sohei-button-dark">
          		        <strong> Sign up</strong>
          		    </a>
          		</div>
          	</div>
          </div>
    		
    	</div>
    </nav>
</div>
</template>

<script>
	import Logo from '~/components/Logo.vue'
	export default {
		components: {
			Logo
		}
	}
</script>

<style>

.branding-logo {
  height: 40px;
  width: auto;
}
.sohei-nav {
	height: 80px;
}

.sohei-button {
  border: solid 1px black;
}

.sohei-button-dark {
  border: solid 1px black;
  background-color: black;
  color: white;
}
</style>