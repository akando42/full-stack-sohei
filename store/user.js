export const state = () => ({
	authenticated: false,
	name: "Noname",
	email: "email@email.com"
})

export const mutations = () => ({
	toggle (state, user){
		user.authenticated = !user.authenticated
	}
})