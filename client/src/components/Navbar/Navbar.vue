<template>
	<nav class="flex py-2 pin-t bg-grey-lightest">
		<NavbarHero class="w-1/5 h-12 flex items-center"/>
		<DashSearch class="w-3/5 h-12 flex items-center invisible md:visible"/>
		<NavbarActions class="w-1/5 h-12 flex flex-row-reverse items-center"/>
	</nav>
</template>
<script>
import NavbarHero from './NavbarHero.vue'
import DashSearch from './DashSearch.vue'
import NavbarActions from './NavbarActions.vue'

export default {
	name: 'Navbar',
	components: {
		NavbarHero,
		DashSearch,
		NavbarActions
	}
}
</script>