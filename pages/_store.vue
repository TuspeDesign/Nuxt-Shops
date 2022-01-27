<template>
	<div v-if="page" id="page">
		<div class="grid grid-cols-2 gap-10">

			<div id="productInfo">
				<h1>{{ page.title }}</h1>

				<table>
					<tbody>
						<tr v-if="page.type">
							<td class="label">Tyyppi:</td>
							<td class="value">{{ page.type.name }}</td>
						</tr>

						<tr v-if="Array.isArray(page.categories)">
							<td class="label">Osasto:</td>
							<td class="value">
								<nuxt-link
									:to="page.categories[0].slug"
									class="text-gray-700 no-underline"
								>
									{{ page.categories[0].name }} &rarr;
								</nuxt-link>
							</td>
						</tr>
					</tbody>
				</table>

				<div
					v-if="page.content"
					id="productContent"
					v-html="page.content"
				/>
			</div>
		</div>
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
		computed: {
			site: function () {
				return this.$store.getters["site"];
			},
		},
		async fetch() {
			const id = await this.$route.params.product;
			const temp = await postData("stores/" + parseInt(id));
			if (temp && temp.id) this.page = temp;
		},
		head() {
			return {
				title: this.page
					? this.page.title +
					  " | " +
					  this.page.categories[0].name +
					  " | " +
					  this.site.name
					: this.site.name,
				meta: [
					{
						property: "og:title",
						name: "twitter:title",
						content: this.page ? this.page : this.site.name,
					},
					{
						hid: this.page ? "product-" + this.page.id : "product",
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