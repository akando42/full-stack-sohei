<template>
	<div class="container">
		<h1> Your Lessons </h1>
		<ul>
			<li v-for="lesson in lessonPosts">
				<a v-bind:href="lesson.slug">
					<div> {{ lesson.title }} </div>
				</a>
			</li>
		</ul>
		<a href="/">Home</a>
    </div>
</template>

<script type="text/javascript">
	export default {
	computed: {
	    lessonPosts(){
	    	console.log("Lessons: ",this.$store.state.lessonPosts);
	        return this.$store.state.lessonPosts;
	    },
	},
	};
</script>