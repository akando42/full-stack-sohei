<template>
	<div>
		<h1>Events</h1>
		<EventCard
		    v-for="(event, index) in events"
		    :key="index"
		    :event="event.data"
		    :data-index="index"
	    />
    </div>
</template>

<style type="text/css"></style>
<script type="text/javascript">
	import EventCard from '~/components/EventCard.vue'
	export default {
		head(){
			return {
				title: 'Event Listing'
			}
		},

		async asyncData({ $axios, error }){
			try {
                const { data } = await $axios.get(process.env.baseUrl+'/.netlify/functions/all_events')
                console.log("Data", data)
                return { events: data }
			} catch (e){
                error ({
                	statusCode: 503, 
                	message: 'No Event is Available At This Time.'
                })
			}
    	},
		components: {
		    EventCard
	    }
	}	</script>