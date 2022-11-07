<template>
  <div>
    <side-bar v-model="drawer" />
    <v-app-bar app color="#385F73" dark>
      <v-app-bar-nav-icon
        @click.stop="$emit('drawerClick', (drawer = !drawer))"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>Orbiter</v-toolbar-title>
      <v-spacer></v-spacer>
      <Profile />
    </v-app-bar>
  </div>
</template>

<script>
import Profile from "@/components/Profile.vue";
export default {
  components: {
    Profile,
  },
  data() {
    return {
      drawer: true
    }
  },
};
</script>

<style lang="scss" scoped>
</style>