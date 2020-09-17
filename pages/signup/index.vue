<template>
	<div class="section">
		<div class="container">
		    <div class="sohei-form-title">
		    	Start Mastering <br/>
		    	The Javascript World Today
		    </div>
		    <SignupForm />
		</div>
	</div>
</template>
<style type="text/css">
	.sohei-form-title {
		font-size: 31px;
	}
</style>
<script type="text/javascript">
	import SignupForm from "~/components/SignupForm"

	export default {
		head(){
			return {
				title: 'Full Stack Sohei - Sign Up With Github',
				meta: [
			        {
			            hid: 'description',
			            name: 'description',
			            content: 'Sign Up With Your Github Account to Access Content'
			        }
			    ],
			}
		},

		components: {
			SignupForm
		}
	}
</script>