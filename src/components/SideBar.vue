<template>
  <v-navigation-drawer
    app
    v-model="drawer"
    height="100%"
    width="250"
    color="#385F73"
    left
  >
    <v-list-item two-line>
      <v-list-item-avatar size="50">
        <img src="https://randomuser.me/api/portraits/men/85.jpg" />
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title class="text-h5 white--text"
          >Yogesh Rithe</v-list-item-title
        >
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <v-list>
      <v-list-item v-for="item in items" :key="item.text" :to="item.link">
        <v-list-item-icon
          ><v-icon color="white">{{ item.icon }}</v-icon></v-list-item-icon
        >
        <v-list-item-content class="text-h6 white--text">{{
          item.text
        }}</v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      items: [
        { text: "Dashboard", icon: "mdi-view-dashboard", link: "/dashboard" },
        { text: "Expenses", icon: "mdi-cart-outline", link: "/expenses" },
      ],
    };
  },
  computed: {
    drawer: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>