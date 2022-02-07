<template>
    <div v-if="page" :id="page.template">
		<h1 class="mt-0 mb-10 text-center text-5xl">{{ page.title }}</h1>
		<Companies v-if="page.items" :items="page.items" />
	</div>
</template>

<script>
    import { postData } from "@/store";

    export default {
        async fetch() {
            const id = await this.$route.params.page.replace(/<\/?[^>]+(>|$)/g, "");
            const temp = await postData("tags/" + id);
            if (temp && temp.id) {
				this.page = temp;
				if (
					Array.isArray(temp.items) &&
					Array.isArray(temp.items[0].images)
				)
					this.page.image = temp.items[0].images[0];
			}
        }
    }
</script>