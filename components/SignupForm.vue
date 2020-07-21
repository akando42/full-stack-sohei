<template>
    <div class="section">    
        <div class="container sohei-form">
			<input 
			    class="input sohei-input" 
			    type="text" 
			    placeholder="Please enter your email"
			>

			<input 
			    class="input sohei-input" 
			    type="password" 
			    placeholder="Please enter your password"
			>
			<input 
			    class="input sohei-input"  
			    type="password" 
			    placeholder="Please re-enter your password"
			>
			<div
			    class="button sohei-button"
			    v-on:click="triggerNetlifyIdentityAction('login')"
			>
				Signup
			</div>

			<div class="sohei-divider"> 
			    or 
			</div>

			<div class="button sohei-social-button">
				Signup with Github
			</div>

			<div class="button sohei-social-button">
				Signup with Gmail
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import netlifyIdentity from 'netlify-identity-widget'
	import {mapActions, mapState} from 'vuex'
    
    netlifyIdentity.init();

	export default {
		computed: {
			hasAccount(){
				return this.$store.state.user.hasAccount
			}
		}, 
		methods: {
			triggerNetlifyIdentityAction(action){
				if (action == "login" || action == "signup"){
					this.$refs.alert.appear('Login is Triggered');
				} else if (action == "logout"){
					this.$refs.alert.appear('Logout is Triggered');
				}
			}
		}
	}
</script>
<style type="text/css">
    .sohei-form {
    	width: 30vw;
    	height: 60vh;
    }

	.sohei-input {
		margin: 1vh 0px;
		box-shadow: none;
		border-radius: none;
		border: 3px solid black;
		width: 30vw;
	}
	
	.sohei-button {
		background-color: black;
		color: white;
		width: 30vw;
	}
	.sohei-social-button {
		margin: 1vh 0px;
        width: 30vw;
		margin: 2vh 0px;
	}
</style>