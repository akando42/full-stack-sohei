<template>
	<div>
		<h1>
			User <strong> {{ id }} </strong>
		</h1>
	</div>
</template>

<script type="text/javascript">
	export default {
		head(){
            return {
            	title: 'User #' + this.id,
            	meta: [
            	    {
            	    	hid: 'description',
            	    	name: 'description',
            	    	content: 'Courses belongs to user ' + this.id
            	    }
            	]
            }
		},
		computed: {
			id(){
                return this.$route.params.user
			}
		}
	}</script>
<style type="text/css"></style>