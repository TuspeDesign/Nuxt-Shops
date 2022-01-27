export const strict = false

export let postData = async function (query = "", data = null, method = "GET", contentType = "application/json", token = null) {
	if (method == "GET" && data) method = "POST";
	const result = await fetch(`https://shops.puoti.dev/${query}`, {
		method: method,
		headers: {
			"Content-Type": contentType,
			...(token ? { Authorization: `Bearer ${token}` } : undefined),
		},
		...(data ? { body: data } : undefined),
	})
	try {
		const json = await result.json()
		return json
	} catch (err) {
		return result.status
	}
}

export const state = () => ({
	site: {
		name: "",
		description: "",
		image: ""
	},
	user: {},
	categories: null,
	note: null
})

export const getters = {
	site: (state) => state.site,
	categories: (state) => state.categories,
	note: (state) => state.note,
}

export const mutations = {
	site(state, item) {
		state.site = item;
	},
	categories(state, item) {
		state.categories = item;
	},
	addUser(state, item) {
		state.user = item
	},
	addNote(state, item) {
		state.note = item;
		setTimeout(function () {
			state.note = null;
		}, 5000);
	}
}