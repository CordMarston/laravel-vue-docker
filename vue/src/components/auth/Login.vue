<template>
  <div class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="w-full max-w-sm">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="login">
        
        <h3 class="text-center text-2xl font-bold">Login</h3>
        <div class="my-3" v-if="error"><Alert error="Invalid Username / Password."></Alert></div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email address</label>
          <input type="email" id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Email" v-model="form.email">
        </div>
        <div class="mb-6">
          <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input type="password" id="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="Password" v-model="form.password">
        </div>
        <div class="flex items-center justify-between">
          <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </div>
      </form>
      <p class="text-center text-gray-500 text-xs">
        &copy;2024 Z Networks. All rights reserved.
      </p>
    </div>
  </div>
</template>
<script>
import Form from '@/plugins/form'
import { useUserStore } from '@/stores/user';
export default {
  name: 'Login',
  data() {
    return {
      form: new Form({
        email: '',
        password: ''
      }),
      userStore: useUserStore(),
      error: false
    }
  },
  methods: {
    async login() {
      try {
        const res = await this.form.post('login');
        this.userStore.setUser(res.data.user);
        this.userStore.setToken(res.data.token);
        this.userStore.setAuthenticated(true);
        this.error = false;
        this.redirect();
      } catch (error) {
        this.error = true;
        console.log(error)
      } 
    },
    redirect() {
      if(!this.error) {
        this.$router.push({ name: 'dashboard'});
      }
    }
  }
}
</script>