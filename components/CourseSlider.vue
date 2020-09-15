<template>
	<div class="section">
		<div class="container">	
				<Carousel per-page="3" pagination-position="bottom" class="columns">
					<Slide v-for="course in slides" :key="course.id" class="column sohei_course_slide">
						<Card v-bind:sohei_slide_spec="course"></Card>
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
	import Figma from '~/assets/courses/figma.jpg'
	import MangMinh from '~/assets/courses/MangMinh.png'
	import Serverless from '~/assets/courses/serverless.jpg'
	import Vue from '~/assets/courses/vue.jpg'
	import GordenHorde from '~/assets/courses/Golden_Horde.png'

	export default {
		components: {
			Carousel,
			Slide,
			Card
		},
		computed: {
			data(){
				console.log("Great", this.$store.state.courses)
				return this.$store.state.courses
			}
		}, 
		data(){
			return {
				slides: [
					{
						id: 1,
						title: 'Mobile and Web Design in Figma ',
						description: 'Very Intesting Slide 1',
						background_color: '#FF8466', 
						color: '#fff', 
						image: Figma
					},
					{
						id: 2,
						title: 'Team Work and Leadership Development',
						description: 'Very Intesting Slide 2',
						background_color: '#000000',
						color: '#fff',
						image: MangMinh
					},
					{
						id: 3,
						title: 'Netlify Function Server Development',
						description: 'Very Intesting Slide 3',
						background_color: '#000000',
						color: '#fff',
						image: Serverless
					},
					{
						id: 4,
						title: 'Frontend Development in Vue',
						description: 'Very Intesting Slide 3',
						background_color: '#000000',
						color: '#fff',
						image: Vue
					},
					{
						id: 5,
						title: 'Icon Design with Figma',
						description: 'Very Intesting Slide 3',
						background_color: '#000000',
						color: '#fff',
						image: Figma
					},
					{
						id: 6,
						title: 'Contract Negotiation for Freelancer',
						description: 'Very Intesting Slide 3',
						background_color: '#000000',
						color: '#fff',
						image: GordenHorde
					}
				]
			}
		}
	}
</script>