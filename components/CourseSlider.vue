<template>
	<div class="section">
		<div class="container">
			    <div class="sohei-band">
<!-- 			    	<div v-for="course in courses">
				        <div class="sohei-slide">
				        	<div class="card">
				        		<div class="card-image">
				        			<figure class="image is-4by3">
									  <img src="course.image" alt="Placeholder image">
									</figure>
				        		</div>
				        		<div class="card-content">
				        			<div class="title">
				        				{course.title}
				        			</div>
				        			<div class="content">
				        				{course.description}
				        			</div>
				        		</div>
				        	</div>
				        </div>
			    	</div> -->
			    	<client-only>
			    		<carousel :data="slide_data"></carousel>
			    	</client-only>
				</div>	
		</div>
	</div>
</template>

<style type="text/css">
	
</style>

<script type="text/javascript">


	export default {
		computed: {
			courses(){
				return this.$store.state.courses
			}
		}, 
		data(){
			return {
				slide_data: [
					{
						id: 1,
						title: 'Slide 1',
						description: 'Very Intesting Slide 1',
						background_color: '#000000'
					},
					{
						id: 2,
						title: 'Slide 2',
						description: 'Very Intesting Slide 2',
						background_color: '#000000'
					},
					{
						id: 3,
						title: 'Slide 3',
						description: 'Very Intesting Slide 3',
						background_color: '#000000'
					}
				]
			}
		}
	}
</script>