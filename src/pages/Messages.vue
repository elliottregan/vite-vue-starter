<template>
  <h1>Messages</h1>
  <h2>{{ name }}</h2>
  <OrderList v-if="fullDetails" v-model="fullDetails.abilities" listStyle="height:auto" dataKey="ability.name">
      <template #header>
          Pokemon Abilities
      </template>
      <template #item="slotProps">
          <div>
              <div>
                  <span>{{slotProps.item.ability.name}}</span>
              </div>
          </div>
      </template>
  </OrderList>

</template>

<script>
import OrderList from 'primevue/orderlist';

export default {
  name: 'Messages',

  components: {
    OrderList,
  },

  computed: {
    name() {
      return this.$store.getters.getPokemonName;
    },
    fullDetails() {
      return this.$store.state.pokemon;
    },
  },

  created() {
    this.$store.dispatch('fetchPokemon');
  },
}
</script>