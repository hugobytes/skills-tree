export default {
  debug: true,
  state: {
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
  },
  addSkill({ type, name, desc }) {
    if (this.debug) console.log("skill added triggered");
    this.state[type].push({ name, desc });
  },
};
