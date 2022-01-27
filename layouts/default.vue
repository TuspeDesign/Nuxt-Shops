<template>
    <div>
        <main
            id="content"
            class="flex flex-col mx-auto"
        >
            <Nuxt keep-alive class="flex-grow" />
		</main>
        <Footer/>
    </div>
</template>

<script>
    import { postData } from "@/store";
    import Footer from "@/components/footer";

    export default {
        components: {
            Footer,
        },
        computed: {
			site: function () {
				return this.$store.getters["site"];
			},
		},
		async fetch() {
			const temp = await postData("info");
			if (temp) this.$store.commit("site", temp);
		},
    };
</script>