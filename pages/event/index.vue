<template>
	<div>
		<h1>Events</h1>
		<EventCard
		    v-for="(event, index) in events"
		    :key="index"
		    :event="event"
		    :data-index="index"
	    />
    </div>
</template>

<style type="text/css">
	
</style>

<script type="text/javascript">
	import EventCard from '~/components/EventCard.vue'
	
	export default {
		head(){
			return {
				title: 'Event Listing'
			}
		},
		asyncData({ $axios }){
			return $axios.get('http://localhost:8888/.netlify/functions/events').then(response => {
				return {
				  events: response.data
				}
			}).catch(e => {
				error({
				  statusCode: 505,
				  message: 'Server Error'
				})
			})
    	},
		components: {
		    EventCard
	    }
	}	
</script>