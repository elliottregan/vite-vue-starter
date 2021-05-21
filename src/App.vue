<template>
  <MainNav />
  <router-view></router-view>
</template>

<script>
import MainNav from '@/components/MainNav.vue';

export default {
  components: {
    MainNav,
  },
};
</script>