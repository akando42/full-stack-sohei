export const state = () => ({
	lessonPosts: [],
	
})

export const mutations = {
	setLessonPosts(state, list){
		state.lessonPosts = list;
	}
};

export const actions = {
	async nuxtServerInit({commit}){
		// Parsing Content Files
		let files = await require.context('~/assets/content/lesson', false, /\.json$/);

		// Mapping Files Content into Objects
		let lessonPosts = files.keys().map(key => {
			let res = files(key);
			res.slug = key.slice(2, -5);
			return res;
		});

		// Commit response to State Storage
		await commit('setLessonPosts', lessonPosts);
	},
};