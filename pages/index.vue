<template>
	<div class="mb-60">
		<div class="container mx-auto text-center">
			<h1 class="mt-40 text-6xl font-extrabold">ETUSIVU</h1>

			<div class="mt-5 text-xl leading-tight">
				Tervetuloa sivulle. Täältä voit etsiä suomalaisia verkkokauppoja,<br>niiden paikkakuntia ja paljon muuta.
			</div>

			<input class="mt-10 w-96 bg-gray-200 text-gray-700 border border-black rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" v-model="search" placeholder="Hae verkkokauppaa">
	    	<div v-for="store in filteredStores" :key="store.id"/>

			<ProductList 
				v-if="featured" 
        		:items="featured" 
        		title="Näyteikkuna" 
      		/>
		</div>
	</div>
</template>

<script>
	import { postData } from "@/store";
	import ProductList from "@/components/productList";
	import Photo from "@/components/img";
	export default {
		components: {
			ProductList,
			Photo,
		},
		data() {
			return {
				featured: null,
				stores: [],
				search: '',
			};
		},
		computed: {
			site: function () {
				return this.$store.getters["site"];
			},
			filteredStores: function(){
				return this.stores.filter((store) => {
					return store.title.match(this.search);
				});
			},
		},
		methods: {
			async checkData(query) {
				let temp = await postData(query);
				return Array.isArray(temp) && temp[0] ? temp : null;
			},
		},
		async fetch() {
			this.featured = await this.checkData("products/paid");
		},
		head() {
			return {
				title: this.site.name,
				meta: [
					{
						property: "og:title",
						name: "twitter:title",
						content: this.site.name,
					},
					{
						hid: "home",
						name: "description",
						content: this.site.description,
					},
					{
						name: "twitter:description",
						property: "og:description",
						content: this.site.description,
					},
					{
						name: "twitter:image",
						property: "og:image",
						content: this.site.image,
					},
				],
			};
		},
	};
</script>