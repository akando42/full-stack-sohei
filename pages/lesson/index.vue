<template>
	<div class="container">
		<h1> Your Lessons </h1>
		<ul>
			<li v-for="lesson in lessonPosts">
				<div> {{ lesson.title }} </div>
				<div> {{ lesson.slug }} </div>
			</li>
		</ul>
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