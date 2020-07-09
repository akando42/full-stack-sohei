
/// STATES ///
export const state = () => ({
	authenticated: false,
	hasAccount: false,
	name: "Noname",
	email: "email@email.com", 
})

/// MUTATIONS ///
export const mutations = () => ({
	toggle (state, user){
		user.authenticated = !user.authenticated
	}
})


/// ACTIONS ///