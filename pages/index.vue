<template>
	<div class="mb-60">
		<div class="container mx-auto text-center">
			<h1 class="mt-40 text-6xl font-extrabold">ETUSIVU</h1>

			<div class="mt-5 text-xl leading-tight">
				Tervetuloa sivulle. Täältä voit etsiä suomalaisia
				verkkokauppoja,<br />niiden paikkakuntia ja paljon muuta.
			</div>

			<Companies
				v-if="companies"
				:items="companies"
				:title="`Lista luotettavista suomalaisista verkkokaupoista`"
				:label="`${amount} suomalaista verkkokauppaa aakkosjärjestyksessä - lisää haetaan kun viimeistä katsotaan`"
			/>
		</div>
	</div>
</template>

<script>
	import { postData } from "@/store";

	export default {
		data() {
			return {
				companies: null,
				amount: 0,
				page: 1,
			};
		},
		async fetch() {
			const temp = await postData(`companies?page=${this.page}`);
			if (Array.isArray(temp)) {
				this.companies = temp;
				this.amount += temp.length;
			}
		},
	};
</script>