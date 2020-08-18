<template>
	<div class="section">
		<div class="container">
			    <div class="sohei-band">
			    	Course Slider
				</div>	
				<Carousel per-page="3" pagination-position="bottom">
					<Slide v-for="slide in slides">
						<div v-bind:style="{
							backgroundColor: slide.background_color,
							color: slide.color,
							height: '300px', 
							width: '21vw'
						}">
						    {{slide.title}}
						</div>
					</Slide>
				</Carousel>
		</div>
	</div>
</template>

<style type="text/css">
	
</style>

<script type="text/javascript">
	import Carousel from 'vue-carousel/src/Carousel.vue'
	import Slide from 'vue-carousel/src/Slide.vue'

	export default {
		components: {
			Carousel,
			Slide,
		},
		computed: {
			courses(){
				return this.$store.state.courses
			}
		}, 
		data(){
			return {
				slides: [
					{
						id: 1,
						title: 'Slide 1',
						description: 'Very Intesting Slide 1',
						background_color: '#FF8466', 
						color: '#fff'
					},
					{
						id: 2,
						title: 'Slide 2',
						description: 'Very Intesting Slide 2',
						background_color: '#000000',
						color: '#fff'
					},
					{
						id: 3,
						title: 'Slide 3',
						description: 'Very Intesting Slide 3',
						background_color: '#000000',
						color: '#fff'
					},
					{
						id: 4,
						title: 'Slide 4',
						description: 'Very Intesting Slide 3',
						background_color: '#000000',
						color: '#fff'
					},
					{
						id: 5,
						title: 'Slide 3',
						description: 'Very Intesting Slide 3',
						background_color: '#000000',
						color: '#fff'
					},
						{
						id: 6,
						title: 'Slide 3',
						description: 'Very Intesting Slide 3',
						background_color: '#000000',
						color: '#fff'
					}
				]
			}
		}
	}
</script>