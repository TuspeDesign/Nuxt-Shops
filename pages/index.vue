<template>
	<div class="mb-60">
		<div class="container mx-auto text-center">
			<h1 class="mt-40 text-blue-400 text-4xl md:text-6xl font-extrabold">SUOMALAISET VERKKOKAUPAT</h1>

			<div class="mt-5 text-lg md:text-xl leading-tight">
				Alla on kasvava lista aktiivisista luotettavista suomalaisista<br>
				verkkokaupoista. Tue kotimaisia yrityksiä ja lähituotantoa, osta<br>
				suomalaiselta.
			</div>
			
			<Companies
				class="mt-20 grid sm:grid-cols-3 md:grid-cols-5"
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