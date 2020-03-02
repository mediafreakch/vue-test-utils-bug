<script>
import Vue from "vue";
import Dashboard from "./Dashboard.vue";
import Chart from "./Chart.vue";

export default Vue.extend({
  name: "GenericView",
  props: ["kind"],
  async created() {
    await this.fetchViewInfo(this.kind);
  },
  methods: {
    fetchViewInfo(kind) {
      this.$store.dispatch("fetchViewInfo", kind);
    }
  },
  computed: {
    viewInfo() {
      return this.$store.getters.viewInfo(this.kind);
    }
  },
  render: function(h) {
    switch (this.kind) {
      case "Chart":
        return h(Chart, { props: { ...this.$props, viewInfo: this.viewInfo } });
      case "Dashboard":
        return h(Dashboard, {
          props: { ...this.$props, viewInfo: this.viewInfo }
        });
      default:
        return h("strong", "Unsupported type!");
    }
  }
});
</script>
