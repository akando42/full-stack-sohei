<template>
	<nuxt-link :to="'/event/' + event.id">
	    <div class="vue_event">
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
		box-shadow: 10px 10px 8px #cccccc;
		border: 1px solid #cccccc;
		margin: 10px 0px;
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

