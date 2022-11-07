<template>
  <div>
    <div>
      <v-menu bottom offset-y>
        <template v-slot:activator="{ on }">
          <v-avatar v-on="on" size="40" color="white">
            <v-icon color="#385F73">mdi-account</v-icon>
          </v-avatar>
        </template>

        <v-card color="#385F73--text">
          <v-card-title class="text-h5">Yogesh Rithe</v-card-title>
          <v-divider />
          <v-list color="#385F73">
            <v-list-item
              v-for="(items, index) in menu"
              :key="index"
              :to="items.link"
            >
              <v-list-item-icon>
                <v-icon color="white" v-text="items.icon"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title class="white--text" v-text="items.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        menu: [
        {
          icon: "mdi-lock",
          text: "Change Password",
          link: "/login",
        },

        {
          icon: "mdi-logout",
          text: "Logout",
          link: "/",
        },
      ],
    }
  },
};
</script>

<style lang="scss" scoped>

</style>
