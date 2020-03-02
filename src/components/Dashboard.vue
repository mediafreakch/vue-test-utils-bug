<template>
  <div>
    <span>{{ title }}</span>
    <GenericView kind="Chart"/>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Dashboard",
  props: ["title"],
  components: {
    GenericView: () => import("./GenericView.vue").then(m => m.default)
  }
});
</script>
