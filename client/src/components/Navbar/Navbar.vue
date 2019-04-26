<template>
	<div class="bg-grey-lightest fixed pin-t pin-x z-100">
  <div class="h-16 flex items-center">
    <div class="w-full container relative mx-auto px-6">
      <div class="flex items-center -mx-6">
				<NavbarHero class="w-1/5 h-12 flex items-center"/>
				<DashSearch class="w-3/5 h-12 flex items-center invisible md:visible"/>
				<NavbarActions class="w-1/5 h-12 flex flex-row-reverse items-center"/>
      </div>
    </div>
  </div>
</div>

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