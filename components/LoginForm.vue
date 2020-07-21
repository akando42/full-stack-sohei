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
			    type="text" 
			    placeholder="Please enter your password"
			>

			<div
			    class="button sohei-button"
			>
				<i class="fa fa-github fa-sohei" aria-hidden="true"></i>
				Login with Github
			</div>

<!-- 			<div class="sohei-divider"> 
			    or 
			</div>

			<div class="button sohei-social-button">
				Login with Github
			</div>
			<div class="button sohei-social-button">
				Login with Gmail
			</div> -->
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		computed: {
			hasAccount(){
				return this.$store.state.user.hasAccount
			}
		}
	}
</script>

<style type="text/css">
    .sohei-fa {
    	color: white;
    }
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

	.sohei-divider {
		width: 30vw;
		margin: 2vh 0px;
	}
	
	.sohei-button {
		background-color: black;
		color: white;
		width: 30vw;
	}

	.sohei-social-button {
        width: 30vw;
	}
</style>