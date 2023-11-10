import { Data } from "../interfaces/data";

const defaults: Data = {
  // incase there is a need to add more status options.
  availableStatus: ["pending", "contacted", "rejected", "accepted"],

  // allocated styles for each status option based on daisyui styling.
  statusStyles: {
    pending: "neutral",
    contacted: "warning",
    rejected: "error",
    accepted: "success",
  },

  data: [
    {
      comp: {
        name: "demo 1",
        status: "pending",
        additional: "",
      },

      people: [
        {
          name: "demo 1",
          status: "pending",
          info: {
            email: "",
            phone: "",
            additional: "",
          },
        },
      ],
    },
    {
      comp: {
        name: "demo 2",
        status: "accepted",
        additional: "",
      },

      people: [
        {
          name: "demo 2.1",
          status: "accepted",
          info: {
            email: "",
            phone: "",
            additional: "",
          },
        },
        {
          name: "demo 2.2",
          status: "contacted",
          info: {
            email: "",
            phone: "",
            additional: "",
          },
        },
      ],
    },
    {
      comp: {
        name: "demo 3",
        status: "contacted",
        additional: "",
      },

      people: [
        {
          name: "demo 3",
          status: "contacted",
          info: {
            email: "",
            phone: "",
            additional: "",
          },
        },
      ],
    },
    {
      comp: {
        name: "demo 4",
        status: "rejected",
        additional: "",
      },

      people: [],
    },
  ],
};

export default defaults;
