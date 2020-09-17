<template>
	<div class="section sohei-error is-fullheight">
		<div class="container is-fullhd ">
			<div class="status_code">
				{{ statusCode }}
			</div>
			<div class="status_message">
				{{ message }}
			</div>
		</div>
	</div>
</template>
<style type="text/css">
.sohei-error {
	display: flex;
	align-items: center;
	justify-content: center;
}
.status_code {
	font-size: 100px;
}
.status_message {
	font-size: 30px;
}
</style>
<script>	
export default {
	props: ['error'],
	layout: 'default',
	head() {
		return {
			title: this.message
		}
	}, 
	computed: {
		statusCode(){
            return this.error.statusCode
		},

		message(){
            return this.error.message
		}
	}
}
</script>