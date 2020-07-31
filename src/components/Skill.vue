<template>
  <div class="flex flex-row items-center py-2 px-3">
    <div class="border border-gray-400 rounded-full p-3 mr-2" />
    <div class>{{ name }}</div>
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
