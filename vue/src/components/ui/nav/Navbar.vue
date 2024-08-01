<template>
    <nav class="bg-slate-700  text-white flex px-4 border-b md:shadow-lg items-center relative">
        <div class="text-lg font-bold md:py-0 py-4">
            IMS
        </div>
        <ul class="md:px-2 ml-auto md:flex md:space-x-2 absolute md:relative top-full left-0 right-0" :class="showing ? 'hidden' : ''">
            <li>
                <a href="#" class="flex md:inline-flex p-4 items-center hover:bg-slate-800">
                    <span>Home</span>
                </a>
            </li>
            <li class="relative parent">
                <a href="#" class="flex justify-between md:inline-flex p-4 items-center hover:bg-slate-800 space-x-2">
                    <span>Products</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current pt-1" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                </a>
                <ul class="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-slate-700 md:shadow-lg md:rounded-b ">
                    <li>
                        <a href="#" class="flex px-4 py-3 hover:bg-slate-800">
                            Add Product
                        </a>
                    </li>
                </ul>
            </li>
            <li class="relative parent">
                <a href="#" class="flex justify-between md:inline-flex p-4 items-center hover:bg-slate-800 space-x-2">
                    <span>{{ userStore.getName }}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current pt-1" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                </a>
                <ul class="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-slate-700 md:shadow-lg md:rounded-b ">
                    <li>
                        <a href="#" class="flex px-4 py-3 hover:bg-slate-800">
                            Logout
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="ml-auto md:hidden text-gray-500 cursor-pointer" @click="toggleShowing">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="h-5 w-5" viewBox="0 0 50 50">
                <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
            </svg>
        </div>
    </nav>
</template>
<script>
import { useUserStore } from '@/stores/user';
import { mapStores } from 'pinia'
export default {
  name: 'Navbar',
  data() {
    return {
      showing: false
    }
  },
  computed: {
    ...mapStores(useUserStore, ['getName'])
  },
  methods: {
    toggleShowing() {
        this.showing = !this.showing;
    }
  }
}
</script>
<style>
    @media only screen and (min-width: 768px){
        .parent:hover .child {
            opacity:1;
            height:auto;
            overflow:none;
            transform: translateY(0);
        }
        .child {
            opacity:0;
            height:0;
            overflow:hidden;
            transform: translateY(-10%);
        }
    }
</style>