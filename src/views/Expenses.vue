<template>
  <div>
    <v-container>
     <v-list>
        <v-list-item>
          <v-list-item-icon
            ><v-icon size="40">mdi-cart-outline</v-icon></v-list-item-icon
          >
          <v-list-item-content class="display-1 #385F73--text">Expenses</v-list-item-content>
        </v-list-item>
      </v-list>
      <v-row class="mt-3">
        <v-col cols="10">
          <v-text-field
            placeholder="search expense"
            v-model="expense"
            outlined
            rounded
          ></v-text-field
        ></v-col>
        <v-col>
          <v-btn
            class="mt-2"
            color="#385F73"
            @click="goToExpenseForm()"
            rounded
            outlined
            >ADD EXPENSE</v-btn
          ></v-col
        >
      </v-row>
      <expenses-form
        v-model="dialog"
        :expenseData="expenseData"
        :addFlag="addFlag"
        @close="getItem()"
        @addExpenseData="postItem($event)"
        @editExpenseData="editItem($event)"
      ></expenses-form>
      <v-data-table
        :headers="headers"
        :items="items"
        :search="expense"
        class="elevation-4 rounded-card"
        hide-default-footer
      >
        <template v-slot:item.action="{ item }">
          <v-icon @click="sendDataForEdit(item)" color="green"
            >mdi-square-edit-outline</v-icon
          >
          <v-icon @click="deleteItem(item._id)" color="red"
            >mdi-delete-outline</v-icon
          >
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import ExpensesForm from "@/components/ExpensesForm.vue";
export default {
  components: {
    ExpensesForm,
  },
  data() {
    return {
      expenseData: {},
      addFlag: true,
      dialog: false,
      expense: "",
      headers: [
        { text: "Category", value: "category" },
        { text: "Amount", value: "amount" },
        { text: "Date", value: "date" },
        { text: "Type", value: "type" },
        { text: "Description", value: "description" },
        { text: "Action", value: "action" },
      ],
      items: [],
    };
  },
  async mounted() {
    await this.getItem();
  },
  methods: {
    async getItem() {
      await axios
        .get("http://localhost:3000/expense")
        .then((response) => (this.items = response.data));
    },
    async postItem(event) {
      await axios
        .post("http://localhost:3000/expense", event)
        .then(() => this.getItem());
    },
    async editItem(event) {
      await axios
        .put("http://localhost:3000/expense/" + event._id, event)
        .then(() => this.getItem());
    },
    async deleteItem(id) {
      await axios
        .delete("http://localhost:3000/expense/" + id)
        .then(() => this.getItem());
    },
    sendDataForEdit(item) {
      this.expenseData = item;
      this.addFlag = false;
      this.dialog = true;
    },
    goToExpenseForm() {
      this.addFlag = true;
      this.dialog = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.rounded-card{
    border-radius:31px;
}
</style>