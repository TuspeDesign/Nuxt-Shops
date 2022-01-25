<template>
	<div v-if="item" class="image">
		<picture class="w-full h-full block">
			<template v-if="item.webp">
				<source :srcset="item.webp" type="image/webp" />
				<source :srcset="item.url" :type="`image/${item.ext}`" />
			</template>
			<img
				class="block w-full shadow-md rounded-xl"
				:class="styleImage"
				:src="item.url"
				:alt="item.alt"
			/>
		</picture>
	</div>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default: null,
			},
			styleImage: {
				type: String,
				default: null,
			},
		},
	};
</script>