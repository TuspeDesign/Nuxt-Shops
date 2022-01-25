<template>
	<section v-if="items && items[0]" class="productList">
		<h2 v-if="title" class="text-center text-4xl">{{ title }}</h2>
		<ul :aria-label="title" class="grid gap-4 m-0 p-0">
			<li v-for="e in items" :key="e.id" class="block">
				<nuxt-link
					:to="`/tuote/${e.id}`"
					class="block text-center relative no-underline"
				>
					<Photo
						v-if="e.images"
						:item="e.images[0]"
						:title="e.name"
						class="square relative"
						:styleImage="`absolute top-0 left-0 object-cover h-full`"
					/>
					<div class="content p-2">
						<div v-if="e.categories" class="category text-gray-500">
							{{ e.categories[0].name }}
						</div>
						<div class="uppercase" v-html="e.title" />
						<div v-if="e.area" class="area">{{ e.area }}</div>
						<div>
							<small>{{ e.valid }}</small>
						</div>
					</div>
					<div
						class="
							type
							absolute
							top-0
							left-0
							px-4
							py-2
							bg-primary
							rounded-tl-md rounded-br-md
							text-white
						"
					>
						{{ e.type.name }}
					</div>
				</nuxt-link>
			</li>
		</ul>
	</section>
</template>

<script>
	import Photo from "./img";
	export default {
		components: {
			Photo,
		},
		props: {
			items: {
				type: Array,
				default: () => [],
			},
			title: {
				type: String,
				default: null,
			},
		},
	};
</script>