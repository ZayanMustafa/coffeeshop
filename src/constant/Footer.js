// constants/footer.js
export const FOOTER_DATA = {
  brand: {
    name: "BrewHaven",
    tagline: "Artisanal coffee crafted with passion since 2012. We source sustainably and brew with care.",
    logo: "/logo.svg",
    social: [
      { icon: "FiInstagram", url: "#" },
      { icon: "FiTwitter", url: "#" },
      { icon: "FiFacebook", url: "#" }
    ]
  },
  contact: {
    address: "123 Coffee Lane, Portland, OR 97204",
    hours: {
      weekdays: "Mon-Fri: 7am-8pm",
      weekends: "Weekends: 8am-9pm"
    },
    phone: "(503) 555-0123",
    email: "hello@brewhaven.com"
  },
  links: [
    {
      title: "Explore",
      links: [
        { name: "Menu", href: "/menu" },
        { name: "Gallery", href: "/gallery" },
        { name: "Our Story", href: "/about" },
        { name: "Brewing Process", href: "/process" }
      ]
    },
    {
      title: "Visit",
      links: [
        { name: "Locations", href: "/locations" },
        { name: "Events", href: "/events" },
        { name: "Workshops", href: "/workshops" },
        { name: "Private Bookings", href: "/private-events" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Accessibility", href: "/accessibility" },
        { name: "Careers", href: "/careers" }
      ]
    }
  ],
  copyright: {
    text: `© ${new Date().getFullYear()} BrewHaven Café. All rights reserved.`,
    tagline: "Proudly serving specialty coffee in Portland."
  }
};


