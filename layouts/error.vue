<template>
	<div class="container sohei-error is-fullheight">
		<h1>{{ message }}</h1>
	</div>
</template>
<style type="text/css">
.sohei-error {
	display: flex;
	align-items: center;
	justify-content: center;
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
            return (this.error && this.error.statusCode)
		},

		message(){
            return this.error.message
		}
	}
}
</script>