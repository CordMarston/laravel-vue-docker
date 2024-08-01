import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
    persist: true,
    state: () => ({ 
        user: {
            id: null,
            name: null,
            email: null
        },
        token: '',
        authenticated: false
    }),
    getters: {
      isAuthenticated:(state) => {
        return state.authenticated;
      },
      getName(state) {
        let fullName = state.user.name;
        let splitName = fullName.split(' ');
        return splitName[0] + ' ' +splitName[1][0];
      }
    },
    actions: {
      setUser(user: { id: null; name: null; email: null; }) {
        this.user = user;
      },
      setToken(token:string) {
        this.token = token;
      },
      setAuthenticated(auth:boolean) {
        console.log(auth);
        this.authenticated = auth;
      }
    },
})