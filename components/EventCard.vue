<template>
	<nuxt-link :to="'/event/' + eventIndex">
	    <div class="vue_event -has-shadow">
	    	<span class="tits">
	    		@{{ event.data.time }} on {{ parsedDate }}
	    	</span>
	    	<h4 class="ass">
	    		{{ event.data.title }}
	    	</h4>
	    	<span> 
	    	    {{event.data.attendees.length}} attending 
	    	</span>
	    </div>
	</nuxt-link>
</template>

<style type="text/css">
	.vue_event {
		border: 2px solid black;
		margin: 20px 100px;
		padding: 20px;
		transition: all 0.3s linear;
        cursor: pointer;
	}

	.vue_event:hover {
		transform: scale(1.01);
		box-shadow: 0 3px 12px 0 rgba(0,0,0,0.2), 0 1px 15px 0 rgba(0,0,0,0.19);
	}

	.tits {
		font-size: 30px;
	}

	.ass {
        font-size: 16px;
	}
</style>

<script type="text/javascript">
	export default {
		name: 'EventCard',
		props: {
			// Passing in the Information
			event: Object
		},
		computed: {
			parsedDate(){
				const eventDate = new Date(this.event.data.date)
				return eventDate.toDateString()
			},

			eventIndex(){
				const eventIndex = this.event.ref['@ref'].id
				console.log("EVENT ", eventIndex)
				return eventIndex
			}
		}
	}
</script>

