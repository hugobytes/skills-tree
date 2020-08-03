<template>
  <div>
    <h1 class="text-3xl mb-6">Skills</h1>

    <section class="mb-16">
      <h2 class="text-xl font-bold underline text-blue-500 mb-2">Required</h2>
      <div v-for="skill in required" :key="skill.name">
        <Skill :name="skill.name" />
      </div>
      <AddSkill />
    </section>

    <section class="mb-16">
      <h2 class="text-xl font-bold underline text-blue-500 mb-2">Desired</h2>
      <div v-for="skill in desired" :key="skill.name">
        <Skill :name="skill.name" />
      </div>
      <AddSkill />
    </section>
  </div>
</template>

<script>
import Skill from "./Skill.vue";
import AddSkill from "./AddSkill.vue";

export default {
  name: "Tree",
  components: {
    Skill,
    AddSkill,
  },
  data: () => {
    return {
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
