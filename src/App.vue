<template>
  <v-app>
    <component :is="layout">
      <v-main>
        <router-view /> 
      </v-main>
    </component>
  </v-app>
</template>

<script>
const defaultLayout = "default";
export default {
  data: () => ({
    //
  }),
  computed: {
    layout() {
      return (this.$route.meta.Layout || defaultLayout)+"Layout" 
    }
  },
};
</script>
