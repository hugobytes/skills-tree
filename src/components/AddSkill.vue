<template>
  <div class="mt-2">
    <div v-if="editing">
      <input
        class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        placeholder="Skill name"
      />
      <div class="p-2">
        <button
          v-on:click="editing = false"
          class="bg-blue-500 text-white text-sm py-2 px-4 rounded-full mr-1"
        >Add this skill</button>
        <button
          v-on:click="editing = false"
          class="border border-gray-400 focus:outline-none text-gray-700 text-sm py-2 px-4 rounded-full"
        >Cancel</button>
      </div>
    </div>
    <button
      v-else
      v-on:click="editing = true"
      class="border border-gray-400 focus:outline-none text-gray-700 text-sm py-2 px-4 rounded-full"
    >Add a skill</button>
  </div>
</template>

<script>
export default {
  name: "AddSkill",
  data: () => {
    return {
      editing: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
