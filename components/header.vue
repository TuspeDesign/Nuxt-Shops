<template>
    <header class="top-0 left-0 z-50 w-full flex justify-between py-4 px-2 md:px-6 bg-slate-600 box-border">

        <nuxt-link
            id="text"
            to="/"
            rel="home"
        >
            <p class="py-2 sm:text-xl md:text-2xl font-bold text-white tracking-wider">VERKKOKAUPPOJA</p>
        </nuxt-link>

        <input class="sm:w-64 md:w-96 bg-gray-200 text-gray-700 border border-black rounded-2xl py-2 px-4 leading-tight focus:outline-none focus:bg-white" type="text" v-model="search" placeholder="Hae verkkokauppaa">
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