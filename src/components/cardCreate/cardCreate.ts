import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class cardCreate extends Vue {
  @Prop() title!: string;
  @Prop() text!: string;
}
