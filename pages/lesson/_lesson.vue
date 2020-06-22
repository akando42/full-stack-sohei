<template>
	<article>
	    <h1>{{lessonPost.title}}</h1>
	    <div class="description"> {{lessonPost.description}}</div>
	    <div class="content"> {{lessonPost.body}} </div>
	    <iframe width="420" height="315" class="player"
		   src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
		</iframe>
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

<style type="text/css">
  .description {
    color: blue;
    font-size: 21px;
  }

  .player {
  	border: solid 3px blue;
  	border-radius: 6px;
  }
</style>