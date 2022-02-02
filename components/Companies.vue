<template>
	<ul :title="title" :aria-label="label" class="grid gap-4 m-0 p-0">
		<li v-for="e in items" :key="e.id" class="block">
			<nuxt-link
				:to="`/kauppa/${e.id}`"
				class="block text-center relative no-underline"
			>
				{{ e.name }}
			</nuxt-link>
		</li>
	</ul>
</template>

<script>
	export default {
		props: {
			items: {
				type: Array,
				default: () => [],
			},
			title: {
				type: String,
				default: null,
			},
			label: {
				type: String,
				default: null,
			},
		},
	};
</script>