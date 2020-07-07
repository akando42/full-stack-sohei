<template>
	<div class="sohei_dashboard">
		<div class="section">
			<div classs="container">
			    <div class="sohei-title">Dashboard</div>
			    <ProfileIcon />
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import ProfileIcon from '~/components/ProfileIcon.vue'

	export default {
		components: {
			ProfileIcon
		}
	}
</script>
<style type="text/css">
.sohei_dashboard {
	height: 1000px;
	width: 100%;
	display: flex;
	justify-content: center;
	/*align-items: center;*/
}
</style>