<template>
    <Login v-if="method == 'login'"></Login>
</template>
<script setup lang="ts">
    import { useRoute } from 'vue-router'
    import Login from '../components/auth/Login.vue';
    const route = useRoute()
    const method = route.params.method;
</script>