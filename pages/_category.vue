<template>
	<div v-if="page" :id="page.template">
		<h1 class="mt-0 mb-10 text-center text-5xl">{{ page.title }}</h1>
		<ProductList v-if="page.items" :items="page.items" />
	</div>
</template>

<script>
	import { postData } from "@/store";
	import ProductList from "@/components/productList";
	export default {
		components: {
			ProductList,
		},
		data() {
			return {
				page: null,
			};
		},
		async fetch() {
			const id = await this.$route.params.category.replace(
				/<\/?[^>]+(>|$)/g,
				""
			);
			const temp = await postData("categories/" + id);
			if (temp && temp.id) {
				this.page = temp;
				if (
					Array.isArray(temp.items) &&
					Array.isArray(temp.items[0].images)
				)
					this.page.image = temp.items[0].images[0];
			}
		},
		computed: {
			site: function () {
				return this.$store.getters["site"];
			},
		},
		head() {
			return {
				title: this.page
					? this.page.title + " | " + this.site.name
					: this.site.name,
				meta: [
					{
						property: "og:title",
						name: "twitter:title",
						content: this.page
							? this.page.title + " | " + this.site.name
							: this.site.name,
					},
					{
						hid: this.page ? "category-" + this.page.id : "category",
						name: "description",
						content:
							this.page && this.page.description
								? this.page.description
								: this.site.description,
					},
					{
						name: "twitter:description",
						property: "og:description",
						content:
							this.page && this.page.description
								? this.page.description
								: this.site.description,
					},
					{
						name: "twitter:image",
						property: "og:image",
						content:
							this.page && this.page.image
								? this.page.image.url
								: this.site.image,
					},
				],
			};
		},
	};
</script>