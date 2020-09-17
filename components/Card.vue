<template>
	<div class="sohei_card">
		<a :href="sohei_slide_spec.link">
			<div class="sohei_card_image" v-bind:style="{
				backgroundColor: '#c4c4c4',
				backgroundImage: 'url('+ sohei_slide_spec.image + ')'
			}">
				
			</div>
			<div class="sohei_card_title">
				<strong class="sohei_card_text">{{ sohei_slide_spec.title }}</strong>
				<!-- <p>{{ sohei_slide_spec.description }}</p> -->
			</div>
	    </a>
	</div>
</template>
<style type="text/css">
.sohei_card_image {
    width: 21vw;
    height: 300px;
}

.sohei_card_title {
    padding: 20px 10px;
    text-align: center;
    height: 100px;
    padding: 25px 50px;
}

.sohei_card {
	width: 21vw;
	height: auto;
	max-height: 450px;
	background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    align-content: center;
    justify-content: center;
}
</style>
<script type="text/javascript">
	export default {
		props: ['sohei_slide_spec']
	}
</script>