

export const RESERVATION_DATA = {
  title: "Reserve Your Table",
  subtitle: "Experience our artisanal coffee in the perfect setting",
  form: {
    fields: [
      {
        id: "name",
        type: "text",
        label: "Full Name",
        placeholder: "Your name"
      },
      {
        id: "email",
        type: "email",
        label: "Email",
        placeholder: "your@email.com"
      },
      {
        id: "date",
        type: "date",
        label: "Date"
      },
      {
        id: "time",
        type: "time",
        label: "Time"
      },
      {
        id: "guests",
        type: "number",
        label: "Number of Guests",
        min: 1,
        max: 8
      }
    ],
    submitText: "Confirm Reservation"
  },
  features: [
    {
      icon: "FiClock",
      title: "Flexible Hours",
      text: "Open 7am-9pm daily"
    },
    {
      icon: "FiUsers",
      title: "Group Friendly",
      text: "Tables up to 8 guests"
    },
    {
      icon: "FiCoffee",
      title: "Special Requests",
      text: "Custom brew options"
    }
  ]
};

