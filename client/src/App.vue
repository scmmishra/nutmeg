<template>
  <div id="app">
  	<Navbar v-if="noNavbar"/>
  	<div class="container mx-auto">
		<router-view/>
  	</div>
    <div class="float-button fixed bg-black mt-10 rounded-full w-12 h-12 text-white flex md:invisible visible shadow-lg active:shadow-sm">
    	<div class="self-center text-center w-full mt-1">
    		<FeatherIcon :name="'search'"/>
    	</div>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar/Navbar.vue'

export default {
	name: 'App',
	components: {
		Navbar
	},
	computed: {
		noNavbar: function () {
			return !['login', 'register'].includes(this.$route.name)
		}
	}
}
</script>
<style>
.float-button{
	bottom:2em;
	right:1em;
}
</style>