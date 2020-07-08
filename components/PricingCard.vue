<template>
	<div class="grid-container">
	<div class="pricing-top">
	  <div></div>
	</div>
	<div class="card pricing-card">
		<div class="content">
			<div class="pricing-title">
				Value
			</div>
			<div class="pricing-benifits">
				<div class="pricing-benifit"> 
				    Access To All Free Content
			    </div>
			    <div class="pricing-benifit"> 
				    Access To All Free Content
			    </div>
			    <div class="pricing-benifit"> 
				    Access To All Free Content
			    </div>
			</div>
			<div class="pricing-value">
				$ 19
			</div>
		</div>
		<div class="pricing-action">
			Get Started
		</div>
	</div>
	<div class="pricing-bottom">
		
	</div>
	</div>
</template>
<script type="text/javascript">
	export default {
        head(){
        	link: [
        	    {rel: 'stylesheet', href: "'~/css/grid.css'"}
        	]	
        }
	}

</script>
<style type="text/css">
.pricing-content {}

.pricing-card {
	border: solid 3px black;
}

.pricing-action {
	background-color: black;
	color: white;
	height: 6vh;
	display: flex;
	align-items: center;
	justify-content: center;
    
}
</style>