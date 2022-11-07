<template>
  <div>
    <v-container>
      <v-row dense>
        <v-col v-for="(item,index) in items" :key="index" >
          <v-card :color="item.color" dark class="rounded-card" elevation="5">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-h5 mb-4">{{item.content}}</div>
                <v-list-item-title class="text-h5 mb-1">
                  {{item.title}}
                </v-list-item-title>
                <v-list-item-subtitle class="text-h5 mb-1">RS.{{item.amount}}/-</v-list-item-subtitle>
                <v-card-actions>
                  <v-btn rounded outlined small class="mt-2"> Show Details </v-btn>
                </v-card-actions>
              </v-list-item-content>
              <v-list-item-avatar size="90" class="mt-10"
              ><v-icon size="90">{{item.icon}}</v-icon></v-list-item-avatar>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: "#385F73",
        content:"Shopping",
        title: "Total Amount",
        amount: 909,
        icon:'mdi-shopping'
      },
      {
        color: "#1F7087",
        content:"Travel",
        title: "Total Amount",
        amount: 0,
        icon:'mdi-train'
      },
      {
        color: "#952175",
        content:"Utilities",
        title: "Total Amount",
        amount: 3456,
        icon:'mdi-server'
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.rounded-card{
    border-radius:35px;
}
</style>