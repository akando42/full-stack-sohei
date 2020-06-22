export const state = () => ({
	lessonPosts: [],
})

export const mutations = {
	setLessonPosts(state, list){
		state.lessonPosts = list;
	},
};

export const actions = {
	async nuxtServerInit({commit}){
		let files = await require.context('~/assets/content/lesson', false, /\.json$/);
	}
}