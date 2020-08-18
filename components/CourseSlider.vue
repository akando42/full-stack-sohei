<template>
	<div class="section">
		<div class="container">	
				<Carousel per-page="3" pagination-position="bottom" class="columns">
					<Slide v-for="slide in slides" class="column sohei_course_slide">
						<Card v-bind:sohei_slide_spec="slide"></Card>
					</Slide>
				</Carousel>
		</div>
	</div>
</template>

<style type="text/css">

.sohei_course_slide {
   display: grid;
   justify-content: center;
   align-content: center;
}

</style>

<script type="text/javascript">
	import Card from '~/components/Card.vue'
	import Carousel from 'vue-carousel/src/Carousel.vue'
	import Slide from 'vue-carousel/src/Slide.vue'

	export default {
		components: {
			Carousel,
			Slide,
			Card
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
						color: '#fff', 
						image: 'https://miro.medium.com/max/3840/1*EFXXj66_mpdQ63BQZt821A.jpeg'
					},
					{
						id: 2,
						title: 'Slide 2',
						description: 'Very Intesting Slide 2',
						background_color: '#000000',
						color: '#fff',
						image: 'https://miro.medium.com/max/3840/1*EFXXj66_mpdQ63BQZt821A.jpeg'
					},
					{
						id: 3,
						title: 'Slide 3',
						description: 'Very Intesting Slide 3',
						background_color: '#000000',
						color: '#fff',
						image: 'https://miro.medium.com/max/3840/1*EFXXj66_mpdQ63BQZt821A.jpeg'
					},
					{
						id: 4,
						title: 'Slide 4',
						description: 'Very Intesting Slide 3',
						background_color: '#000000',
						color: '#fff',
						image: 'https://miro.medium.com/max/3840/1*EFXXj66_mpdQ63BQZt821A.jpeg'
					},
					{
						id: 5,
						title: 'Slide 5',
						description: 'Very Intesting Slide 3',
						background_color: '#000000',
						color: '#fff',
						image: 'https://miro.medium.com/max/3840/1*EFXXj66_mpdQ63BQZt821A.jpeg'
					},
						{
						id: 6,
						title: 'Slide 6',
						description: 'Very Intesting Slide 3',
						background_color: '#000000',
						color: '#fff',
						image: 'https://miro.medium.com/max/3840/1*EFXXj66_mpdQ63BQZt821A.jpeg'
					}
				]
			}
		}
	}
</script>