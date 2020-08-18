<template>
	<div class="sohei_card">
		<div class="sohei_card_image" v-bind:style="{background: `url(${sohei_slide_spec.image})`}">
			
		</div>
		<div class="sohei_card_title">
			<h1>{{ sohei_slide_spec.title }}</h1>
			<p>{{ sohei_slide_spec.description }}</p>
		</div>
	</div>
</template>
<style type="text/css">
.sohei_card_image {
   width: 18vw;
   background-color: red;
   height: 300px;
}

.sohei_card_title {
   padding: 10px;
}
.sohei_card {
	width: 18vw;
	height: 400px;
	background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
}
</style>
<script type="text/javascript">
	export default {
		props: ['sohei_slide_spec']
	}
</script>