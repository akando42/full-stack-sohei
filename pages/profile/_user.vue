<template>
	<div>
		<h1>
			User <strong> {{ $route.params.user }} </strong>
		</h1>
	</div>
</template>

<script type="text/javascript">
	export default {
		head(){
            return {
            	title: 'User #' + this.user,
            	meta: [
            	    {
            	    	hid: 'description',
            	    	name: 'description',
            	    	content: 'Courses belongs to user ' + this.user
            	    }
            	]
            }
		},
		computed: {
			user(){
                return this.$route.params.user
			}
		}
	}</script>
<style type="text/css"></style>