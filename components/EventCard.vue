<template>
	<nuxt-link :to="'/event/' + event.id">
	    <div class="vue_event -has-shadow">
	    	<span class="tits">
	    		@{{ event.time }} on {{ parsedDate }}
	    	</span>
	    	<h4 class="ass">
	    		{{ event.title }}
	    	</h4>
	    </div>
	</nuxt-link>
</template>

<style type="text/css">
	.vue_event {
		background-color: red;
		border: 1px solid #cccccc;
		margin: 10px 0px;
	}

	.vue_event:hover {
		
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
				const eventDate = new Date(this.event.date)
				return eventDate.toDateString()
			}
		}
	}
</script>

