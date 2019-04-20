<template>
	<div>
		<img class="bg-grey-light relative cursor-pointer hover:shadow-md w-10 h-10 rounded-full mr-4" :src="profile.url" :alt="profile.name" >
	</div>
</template>
<script>
	export default {
		name: 'NavbarHero',
		data() {
			return {
			  profile: {
					url:'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg',
					name: "Majestic Blue"
				},
			  show: false
			};
	  }
	}
</script>