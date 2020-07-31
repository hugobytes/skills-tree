<template>
  <div class="border border-gray-400 rounded mb-3 py-2 px-3">
    {{ name }}
  </div>
</template>

<script>
export default {
  name: "Skill",
  props: {
    name: String,
    desc: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
