<template>
  <div id="app">
    <div class="container mx-auto max-w-xl mt-6">
      <Tree />
    </div>
  </div>
</template>

<script>
import Tree from "./components/Tree.vue";

export default {
  name: "App",
  components: {
    Tree,
  },
};
</script>

<style></style>
