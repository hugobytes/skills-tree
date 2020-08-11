<template>
  <div>
    <h1 class="text-3xl mb-6">Skills</h1>
    <section class="mb-16" v-for="group in groups" :key="group.id">
      <h2 class="text-xl font-bold underline text-blue-500 mb-2">{{group.name}}</h2>
      <div v-for="skill in group.skills" :key="skill.name">
        <Skill :name="skill.name" />
      </div>
      <AddSkill />
    </section>
  </div>
</template>

<script>
import Skill from "./Skill.vue";
import AddSkill from "./AddSkill.vue";
import skills_store from "../lib/skills_store";

export default {
  name: "Tree",
  components: {
    Skill,
    AddSkill,
  },
  data: () => ({
    groups: skills_store.state,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
