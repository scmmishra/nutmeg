<template>
	<div class="w-full bg-white rounded shadow overflow-hidden py-4 px-6 mb-5 hover:shadow-md">
		<div>
			<div class="font-bold text-xl mb-2">{{ note.title }}</div>
			<p class="text-grey-darker text-base leading-normal">
				{{ note.description }}
			</p>
		</div>
		<div class="pt-3">
			<span v-for="tag in note.tags" class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker hover:text-black cursor-pointer mr-2">#{{ tag.name }}</span>
		</div>
	</div>
</template>
<script>
export default {
	name: "NoteCard",
	props: ['note']
}
</script>