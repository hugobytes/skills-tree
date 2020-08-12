<template>
  <div class="mt-2">
    <div v-if="editing">
      <input
        class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
        placeholder="Skill (e.g. Accounting, Marketing)"
        v-model="name"
      />
      <textarea
        rows="6"
        class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mt-2"
        placeholder="Describe this skill..."
        v-model="desc"
      />
      <div class="p-2">
        <button
          v-on:click="addSkill"
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
import skills_store from "../lib/skills_store";

export default {
  name: "AddSkill",
  props: {
    group_id: String,
  },
  data() {
    return {
      editing: false,
      name: "",
      desc: "",
    };
  },
  methods: {
    addSkill() {
      if (this.name && this.name != "") {
        skills_store.addSkill({
          name: this.name,
          group_id: this.group_id,
          desc: this.desc,
        });
        (this.name = ""), (this.desc = "");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
