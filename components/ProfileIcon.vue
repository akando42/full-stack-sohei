<template>
	<div class="icon_outer">
		<div class="icon_container button">
			<div class="icon_name">
			    {{ username }}
			</div>
			<div class="icon_image"></div>
		</div>
	</div>
</template>
<script type="text/javascript">
  export default {
  	computed: {
  		username(){
  			return this.$store.state.user.name
  		}, 
  		changeAccess(){
  			
  		}
  	}
  	
  }
</script>

<style type="text/css">
	.icon_outer {
		height: 60px;
		display: flex;
		align-items: center;
		overflow: visible;
	}
	.icon_container {
		overflow: visible;
		background-color: black !important;
		color: white !important;
		width: 120px;
		height: 40px;
		border-radius: 9px;
		border: solid 2px black;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}	

	.icon_name {
	    width: 100%;
	}

	.icon_image {
		background-color: black;
		overflow: visible;
		height: 50px;
		width: 50px;
		border-radius: 50px;
		margin-right: -40px;
		box-shadow: -1px 1px 3px #000;
		background: url("https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2Njc5MTIyNzY2OTk2NTM1/nikola_tesla_napoleon-sarony-public-domain-via-wikimedia-commons.jpg") no-repeat;
	    background-size: cover;
	}
</style>