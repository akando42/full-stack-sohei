<style type="text/css">
  .player {
  	width: 1000px;
  }
</style>

<template>
	<article>
	    <h1>{{lessonPost.title}}</h1>
	    <div>{{lessonPost.description}}</div>
	    <div class="player" v-html="$md.render(lessonPost.body)" />
    </article>
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