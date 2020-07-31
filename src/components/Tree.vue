<template>
  <div>
    <h1 class="text-3xl mb-6">Skills</h1>

    <section class="my-4">
      <h2 class="text-lg">Required</h2>
      <div v-for="skill in required" :key="skill.name">
        <Skill :name="skill.name" />
      </div>
    </section>

    <section class="my-4">
      <h2 class="text-lg">Desired</h2>
      <div v-for="skill in desired" :key="skill.name">
        <Skill :name="skill.name" />
      </div>
    </section>

    <button
      class="bg-gray-500 hover:bg-gray-700 focus:outline-none text-white font-bold py-2 px-4 rounded mt-6"
    >
      Add Skill
    </button>
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
      desired: [
        {
          name: "Marketing",
          desc: "Great description.",
        },
        {
          name: "Law",
          desc: "Great description.",
        },
      ],
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
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
