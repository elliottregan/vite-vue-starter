<template>
  <nav>
    <router-link
      v-for="view in links"
      :key="view.label"
      :to="{ name: view.routeName }"
      >{{ view.label }}</router-link
    >
  </nav>
</template>

<script>
  export default {
    name: 'HeaderNav',
    data() {
      return {
        links: [
          {
            label: 'Bookings',
            routeName: 'Bookings',
          },
          {
            label: 'Messages',
            routeName: 'Messages',
          },
          {
            label: 'Activity',
            routeName: 'Activity',
          },
        ],
      };
    },
  };
</script>
