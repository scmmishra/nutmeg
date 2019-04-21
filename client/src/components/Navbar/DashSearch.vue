<template>
	<div>
		<input type="search" name="dash-search" v-shortkey.focus="['meta', 'k']" class="form-input max-w-xs" placeholder="Search [⌘ + K]">
	</div>
</template>
<script>
	export default {
		name: 'DashSearch'
	}
</script>