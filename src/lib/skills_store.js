export default {
  debug: true,
  state: {
    groups: [
      {
        name: "Required",
        editable: false,
        skills: [
          {
            name: "Accounting",
            desc: "Great description.",
          },
          {
            name: "Law",
            desc: "Great description.",
          },
        ],
      },
      {
        name: "Must have one of",
        editable: true,
        skills: [],
      },
      {
        name: "Desired",
        editable: false,
        skills: [
          {
            name: "Marketing",
            desc: "Great description.",
          },
        ],
      },
    ],
  },
  addSkill({ type, name, desc }) {
    if (this.debug) console.log("skill added triggered");
    this.state[type].push({ name, desc });
  },
};
