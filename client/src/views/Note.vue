<template>
	<div class="h-screen pt-20">
		<div class="w-full bg-white rounded shadow overflow-hidden py-4 px-6 mb-5 hover:shadow-md h-full">
		<div>
			<div class="font-bold text-3xl mb-2">{{ note.title }}</div>
			<div class="py-3">
			<span v-if="note.tags" v-for="tag in note.tags" class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker 	hover:bg-grey-darkest hover:text-grey-lighter cursor-pointer mr-2">#{{ tag.name }}</span>
			</div>
			<Editor :note="note.body"/>
		</div>
	</div>
	</div>
</template>

<script>
import Editor from '@/components/Note/Editor'

export default {
	name: 'home',
	data() {
		return {
			note: {
				title: "Hello!",
				body: {
					"type": "doc",
					"content": [
						{
						"type": "paragraph",
						"content": [
								{
								"type": "text",
								"text": "This is some inserted text. 👋"
								}
							]
						}
					]
				}
			}
		}
	},
	components: {
		Editor
	}
}
</script>
