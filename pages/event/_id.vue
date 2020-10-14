<template>
	<div>
		<div class="event_detail_card">
		    <h1 class="event_title">Event {{ $route.params.id }}</h1>
		    
		    <div>
		       
		    </div>
		    
		</div>
	</div>
</template>

<style type="text/css">
	.event_detail_card {
		border: 2px solid black;
		margin: 20px 100px;
		padding: 20px;
	}

	/*.event_detail_card:hover {
		transform: scale(1.01);
		box-shadow: 0 3px 12px 0 rgba(0,0,0,0.2), 0 1px 15px 0 rgba(0,0,0,0.19);
	}*/

	.event_title {
		font-size: 30px;
	}
</style>

<script type="text/javascript">
	export default {
		head(){
			return {
				title: 'Event ' + this.id,
				meta: [
				    {
				    	hid: 'description', 
				    	name: 'description',
				    	content: 'Detail information about event' + this.id
				    }
				]
			}
		},

		// async asyncData({ $axios, error}){
		// 	try {
  //               const { data } = await $axios.get(process.env.baseUrl+'/.netlify/functions/read_event'+params.id)
  //               return {
  //               	event: data
  //               }
		// 	} catch (e){
		// 		error ({
		// 			statusCode: 503, 
		// 			message: 'Event Detail is Not Available'
		// 		})
		// 	}
		// },

		computed: {
            id(){
            	return this.$route.params.id
            }
		}
	}
</script>