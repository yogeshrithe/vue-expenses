<template>
  <div>
    <v-container>
      <v-list>
        <v-list-item>
          <v-list-item-icon
            ><v-icon size="40">mdi-view-dashboard</v-icon></v-list-item-icon
          >
          <v-list-item-content class="display-1 #385F73--text">Dashboard</v-list-item-content>
        </v-list-item>
      </v-list>
      <card />
      <area-chart />
      <bar-graph />
    </v-container>
  </div>
</template>

<script>
import AreaChart from "@/components/AreaChart.vue";
import BarGraph from "@/components/BarGraph.vue";
import Card from "@/components/Card.vue";
export default {
  components: {
    Card,
    BarGraph,
    AreaChart
  },
};
</script>

<style lang="scss" scoped>
</style>