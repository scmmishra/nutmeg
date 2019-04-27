<template>
	<div>
		<Dropdown>
			<ProfileImage class="hover:shadow-md"/>
		</Dropdown>
	</div>
</template>
<script>
import ProfileImage from '@/components/Profile/ProfileImage.vue'

	export default {
		name: 'NavbarActions',
		components: {
			ProfileImage,
		}
	}
</script>