<template>
	<div class="container sohei-error is-fullheight">
		<h1>Error Page</h1>
	</div>
</template>
<style type="text/css">
.sohei-error {
	background-color: red;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
<script>	
export default {
	props: ['error'],
	layout: 'default'
}
</script>