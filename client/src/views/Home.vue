<template>
	<div class="h-screen pt-20">
		<div class="flex pb-5">
			<div class="w-1/3 flex items-center text-2xl text-gray-700 font-bold"></div>
			<div class="flex flex-row-reverse items-center w-2/3">
				<button class="button" type="submit" >New</button>
				<div class="flex items-center w-32 mr-4 invisible">
					<select class="appearance-none py-3 bg-gray-400 px-3 w-full h-full text-gray-800 focus:outline-none">
						<option>Cards</option>
						<option>List</option>
						<option>Kanban</option>
					</select>
				</div>
			</div>
		</div>
		<NoteCard v-for="note in notes" :note="note" :key="note.id"/>
	</div>
</template>

<script>
import NoteCard from '@/components/Note/NoteCard'
export default {
	name: 'home',
	data () {
		return {
			notes: [
				{
					id: '143423423',
					title: 'A Modest Proposal',
					excerpt: 'A Modest Proposal for preventing the children of poor people in Ireland, from being a burden on their parents or country, and for making them beneficial to the publick.',
					tags: [
						{
							name: 'essay'
						},
						{
							name: 'literature'
						},
						{
							name: 'inspiration'
						}
					]
				},
				{
					id: '143234242',
					title: 'The Value of Science',
					excerpt: 'From time to time people suggest to me that scientists ought to give more consideration to social problems - especially that they should be more responsible in considering the impact of science on society.',
					tags: [
						{
							name: 'inspiration'
						},
						{
							name: 'science'
						}
					]
				},
				{
					id: '647687659786',
					title: 'The Commencement Speech',
					excerpt: 'I am honored to be with you today at your commencement from one of the finest universities in the world. I never graduated from college. Truth be told, this is the closest I’ve ever gotten to a college graduation.',
					tags: [
						{
							name: 'inspiration'
						},
						{
							name: 'startup'
						},
						{
							name: 'apple'
						}
					]
				},
				{
					id: '45845634263',
					title: 'I Have a Dream',
					excerpt: 'I am happy to join with you today in what will go down in history as the greatest demonstration for freedom in the history of our nation.',
					tags: [
						{
							name: 'freedom'
						},
						{
							name: 'history'
						}
					]
				}
			]
		}
	},
	components: {
		NoteCard
	}
}
</script>
