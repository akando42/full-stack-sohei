<template>
	<div class="sohei_slide">
		{{ slideTitle }}
	</div>
</template>

<script type="text/javascript">
	export default {
		props: [
		    'slideTitle'
		]
	}
</script>
<style type="text/css">
    .sohei_slide {
    	background-color: yellow;
    	height: 20vh;
    	width: 30vw;
    	color: black;
    }
</style>