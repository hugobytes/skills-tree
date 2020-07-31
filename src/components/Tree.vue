<template>
  <div>
    <h1 class="text-3xl mb-6">Skills</h1>

    <section class="mb-10">
      <h2 class="text-xl font-bold underline text-blue-500 mb-2">Required</h2>
      <div v-for="skill in required" :key="skill.name">
        <Skill :name="skill.name" />
      </div>
      <div class="mt-4">
        <input
          class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
          v-if="editingRequired"
          placeholder="Skill name"
        />
        <button
          v-else
          v-on:click="editingRequired = true"
          class="border border-gray-400 focus:outline-none text-gray-700 text-sm py-2 px-4 rounded-full"
        >Add a skill</button>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-xl font-bold underline text-blue-500 mb-2">Desired</h2>
      <div v-for="skill in desired" :key="skill.name">
        <Skill :name="skill.name" />
      </div>
      <button
        v-on:click="editingDesired = true"
        class="border border-gray-400 focus:outline-none text-gray-700 text-sm py-2 px-4 rounded-full mt-4"
      >Add a skill</button>
    </section>
  </div>
</template>

<script>
import Skill from "./Skill.vue";

export default {
  name: "Tree",
  components: {
    Skill,
  },
  data: () => {
    return {
      editingRequired: false,
      editingDesired: false,
      required: [
        {
          name: "Accounting",
          desc: "Great description.",
        },
        {
          name: "Law",
          desc: "Great description.",
        },
      ],
      desired: [
        {
          name: "Marketing",
          desc: "Great description.",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
