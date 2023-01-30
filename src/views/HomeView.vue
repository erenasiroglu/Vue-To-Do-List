<!-- <template>
  <div class="home">
    <Website></Website>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import WebSite from "@/components/WebSite/WebSite.vue";

@Component({
  components: {
    WebSite,
  },
})
export default class AboutView extends Vue {}
</script> -->

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
