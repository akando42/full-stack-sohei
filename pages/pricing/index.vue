<template>
	<div class="pricing-page">
		<div class="section pricing-header">
			<div class="container">
				<div class="sohei-title pricing-title">
			        From Idea to Product In<br/>
			        An Execution Blitz
		        </div>
			</div>
		</div>
		<div class="section pricing-content">
			<div class="columns">
				<div class="column">
				   <PricingCard />	 	
				</div>
				<div class="column">
					<PricingCard />	 	
				</div>
				<div class="column">
					<PricingCard />	 	
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import PricingCard from "~/components/PricingCard.vue"
    export default {
    	components: {
    		PricingCard
    	}
    }
</script>
<style type="text/css">
.pricing-page {
	
}
.pricing-header {
	min-height: 20vh;

}
.pricing-title {
    font-size: 42px;
}

.pricing-content {
	min-height: 70vh;
	padding-left: 20vh;
	padding-right: 20vh;
}
</style>