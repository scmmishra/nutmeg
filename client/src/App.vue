<template>
  <div id="app" class="container mx-auto">
  	<Navbar v-if="noNavbar"/>
    <router-view/>
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
