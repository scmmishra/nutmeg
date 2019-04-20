<template>
	<nav class="flex py-2">
		<div class="w-1/5 h-12 flex items-center">
			<FeatherIcon :name="logo" class="p-2"/>
			<span class="text-black tracking-wide uppercase font-bold text-sm">Nutmeg</span>
		</div>
		<div class="w-3/5 h-12 flex items-center">
			<input type="search" name="dash-search" class="form-input max-w-xs" placeholder="Search [⌘ + K]">
		</div>
		<div class="w-1/5 h-12 flex flex-row-reverse items-center">
			<div>
	      <img
	        class="relative cursor-pointer hover:shadow-md w-10 h-10 rounded-full mr-4"
	        :src="profile.url"
	        :alt="profile.name"
	      >
    	</div>
		</div>
	</nav>
</template>
<script>
export default {
	name: 'Navbar',
	data() {
    return {
      profile: {
        url:
          "https://pbs.twimg.com/profile_images/1047479361819922437/yHgaCFdq_400x400.jpg",
        name: "Shivam Mishra"
      },
      show: false
    };
  },
	computed: {
		logo: function() {
			const logos = ['clipboard', 'coffee', 'edit-2']
			return logos.randomElement()
		}
	}
}
</script>