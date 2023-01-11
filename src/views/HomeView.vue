<template>
  <div class="home">
    <cardCreate :title="homeViewTitle" :text="homeViewText"></cardCreate>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import cardCreate from "@/components/cardCreate/cardCreate.vue";

@Component({
  components: {
    cardCreate,
  },
})
export default class HomeView extends Vue {
  public homeViewTitle = "title";
  public homeViewText = "text";
}
</script>
