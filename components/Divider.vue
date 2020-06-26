<template>
    <div>
	  <div class="columns is-mobile sohei-divider-1">
	    <div class="column sohei-left"></div>
	    <div class="column sohei-center"></div>
	    <div class="column sohei-right"></div>
	  </div>

	  <div class="columns is-mobile sohei-divider-2">
	    <div class="column sohei-left-2"></div>
	    <div class="column sohei-center-2"></div>
	    <div class="column sohei-right-2"></div>
	  </div>
    </div>
</template>
<script>
</script>
<style>
.sohei-divider-1{
  padding: 0px;
  margin: 0px 50px 0px 50px;
}

.sohei-left {
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  height: 10px;
}
.sohei-center {
  border-bottom: 2px solid black;
  height: 10px;
  min-width: 96%;
}
.sohei-right {
  border-bottom: 2px solid black;
  border-left: 2px solid black;
  height: 10px;
}

.sohei-divider-2 {
  padding: 0px;
  margin: -12px 50px 0px 50px;
}

.sohei-left-2 {
  border-right: 2px solid black;
  height: 10px;
}
.sohei-center-2 {
  height: 10px;
  min-width: 96%;
}
.sohei-right-2 {
  border-left: 2px solid black;
  height: 10px;
}
</style>