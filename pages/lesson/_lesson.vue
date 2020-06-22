<template>
	{{lessonPost.title}}
	{{lessonPost.description}}
	{{lessonPost.body}}
</template>

<script type="text/javascript">
export default {
	async asyncData({params, payload}){
	    if(payload) return { lessonPost: payload};
	    else 
	        return {
            lessonPost: await require(`~/assets/content/lesson/${params.lesson}.json`),
	    };
    },
};
</script>