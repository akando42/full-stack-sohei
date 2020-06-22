<template>
	<article>
	    <h1>{{lessonPost.title}}</h1>
	    <div class="description"> {{lessonPost.description}}</div>
	    <div class="content"> {{lessonPost.body}} </div>
		<iframe 
		  class="player"
		  width="1120" height="630" 
		  v-bind:src="'https://www.youtube.com/embed/'+lessonPost.video_id+'?controls=0'"
		  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
		</iframe>
    </article>
</template>

<script type="text/javascript">
	export default {
		async asyncData({params, payload}){
		    if(payload){
		    	console.log("PAYLOAD", payload);
		    	return { lessonPost: payload};
		    }
		    else 
		        return {
		        lessonID: '123123',
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