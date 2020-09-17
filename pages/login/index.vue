<template>
	<div class="section">
		<div class="container">
		    <div class="sohei-form-title">
		    	Welcome Back To Full Stack Sohei
		    </div>
		    <LoginForm />
		</div>
	</div>
</template>
<script type="text/javascript">
	import LoginForm from "~/components/LoginForm"

	export default {
		head(){
            return {
            	title: 'Full Stack Sohei - Student Account Access'
            }
		},
		computed: {
			hasAccount(){
				return this.$store.state.user.hasAccount
			},
		},
		components: {
			LoginForm
		}
	}
	
</script>
<style type="text/css">
	.sohei-form-title {
		font-size: 31px;
	}
</style>