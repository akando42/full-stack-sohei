<template>
	<h1> Your Lessons </h1>
</template>

<script type="text/javascript">
export default {
	computed: {
        lessonPosts(){
            return this.$store.state.lessonPosts;
        },
    },
};
</script>