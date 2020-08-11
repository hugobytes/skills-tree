export default {
  debug: true,
  state: {
    required: {
      name: "Required",
      id: "required",
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
    "must-have-one-of": {
      name: "Must have one of",
      id: "must-have-one-of",
      skills: [],
    },
    desired: {
      name: "Desired",
      id: "desired",
      skills: [
        {
          name: "Marketing",
          desc: "Great description.",
        },
      ],
    },
  },
  addSkill({ type, name, desc }) {
    if (this.debug) console.log("skill added triggered");
    this.state[type].skills.push({ name, desc });
  },
};
