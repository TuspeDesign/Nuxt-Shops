<template>
    <header class="top-0 left-0 z-50 w-full flex justify-between py-4 px-6 bg-gray-300 box-border">

        <nuxt-link
            id="text"
            to="/"
            rel="home"
        >
            <p class="py-3 px-4 text-2xl font-bold text-gray-900 tracking-wide">VERKKOKAUPPOJA</p>
        </nuxt-link>

        <input class="w-96 bg-gray-200 text-gray-700 border border-gray-700 rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white" type="text" v-model="search" placeholder="Hae verkkokauppaa">
	    <div v-for="store in filteredStores" :key="store.id"/>
    </header>
</template>

<script>
    export default {
        data() {
			return {
				featured: null,
				stores: [],
				search: '',
			};
		},

        computed: {
            filteredStores: function(){
				return this.stores.filter((store) => {
					return store.title.match(this.search);
				});
			},
		},
    }
</script>