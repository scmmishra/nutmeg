<template>
	<img :class="styleClass" :src="profile.url" :alt="profile.name">
</template>
<script>
	export default {
		name: "ProfileImage",
		props: ['size'],
		data () {
			return {
				profile: {
					url:'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg',
					name: "Majestic Blue"
				},
				show: false
			};
		},
		computed: {
			styleClass: function() {
				if (this.size == "medium") {
					return `profile w-24 h-24`
				}
				if (this.size == "large") {
					return `profile w-64 h-64`
				}
				else return `profile w-10 h-10`
			}
		}
	}
</script>