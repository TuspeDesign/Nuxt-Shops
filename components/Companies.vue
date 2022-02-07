<template>
	<ul :title="title" :aria-label="label" class="grid gap-4 m-0 p-0">
		<li v-for="e in items" :key="e.id" class="block text-center md:text-left">
			<nuxt-link
				:to="`/kauppa/${e.id}`"
				class="block relative hover:underline mt-5 text-blue-700 font-bold"
			>
				{{ e.name }}
			</nuxt-link>
			
			<p>
				{{ e.description }}
			</p>

			<p class="text-sm text-gray-500">
				{{ e.areaName }},
				{{ e.company }}
			</p>
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