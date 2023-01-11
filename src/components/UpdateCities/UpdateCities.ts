import { Component, Vue } from "vue-property-decorator";
@Component
export default class UpdateCities extends Vue {
  public cityInput = "";
  public submitInput() {
    this.$emit("update", this.cityInput);
    this.cityInput = "";
  }
}
