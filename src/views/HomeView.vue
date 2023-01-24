<template>
  <div class="home">
    <todo-list></todo-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import todoList from "@/components/todoList/todoList.vue";

@Component({
  components: {
    todoList,
  },
})
export default class HomeView extends Vue {}
</script>
