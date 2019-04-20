<template>
	<div>
		<FeatherIcon :name="logo" class="p-2"/>
		<span class="text-black invisible md:visible tracking-wide uppercase font-bold text-sm">Nutmeg</span>
	</div>
</template>
<script>
	export default {
		name: 'NavbarHero',
		computed: {
			logo: function() {
				const logos = ['clipboard', 'coffee', 'edit-2']
				return logos.randomElement()
			}
		}
	}
</script>