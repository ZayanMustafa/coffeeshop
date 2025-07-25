



// constants/about.js
export const ABOUT_DATA = {
  hero: {
    title: "Our Coffee Journey",
    subtitle: "Brewing excellence since 2010",
    description: "What began as a small passion project has blossomed into a thriving community of coffee enthusiasts dedicated to quality and craftsmanship.",
    image: "/image.jpeg",
    stats: [
      { value: 12, label: "Global Locations" },
      { value: 45, label: "Team Members" },
      { value: 1000, label: "Daily Customers" }
    ]
  },
  ourStory: {
    title: "From Bean to Cup",
    subtitle: "The story behind our brew",
    timeline: [
      {
        year: "2010",
        title: "Humble Beginnings",
        description: "Started as a small roastery in Portland with just 5 employees and a dream to share great coffee.",
        icon: "FiCoffee",
        image: "/roastery.jpg"
      },
      {
        year: "2014",
        title: "First Café",
        description: "Opened our flagship location in downtown Portland, introducing our unique brewing methods.",
        icon: "FiHome",
        image: "/flagshiplocation.jpg"
      },
      {
        year: "2018",
        title: "National Recognition",
        description: "Featured in 'Coffee Monthly' as one of America's most innovative coffee shops.",
        icon: "FiAward",
        image: "/coffee.jpg"
      },
      {
        year: "2023",
        title: "Global Reach",
        description: "Now serving customers worldwide through our online store and 12 physical locations.",
        icon: "FiGlobe",
        image: "/worldwide.jpg"
      }
    ]
  },
  team: {
    title: "Meet Our Baristas",
    subtitle: "The artisans behind your cup",
    members: [
      {
        name: "Jamie Richardson",
        role: "Head Roaster",
        bio: "With 15 years in specialty coffee, Jamie ensures every bean meets our exacting standards.",
        image: "/team.jpg",
        social: {
          twitter: "#",
          instagram: "#",
          linkedin: "#"
        }
      },
      {
        name: "Maria Chen",
        role: "Master Barista",
        bio: "National latte art champion who brings creativity to every cup she crafts.",
        image: "/team.jpg",
        social: {
          twitter: "#",
          instagram: "#",
          linkedin: "#"
        }
      },
      {
        name: "Ethan Wright",
        role: "Coffee Sourcer",
        bio: "Travels the world to build direct relationships with coffee farmers.",
        image: "/team.jpg",
        social: {
          twitter: "#",
          instagram: "#",
          linkedin: "#"
        }
      }
    ]
  },
  values: {
    title: "Our Core Values",
    subtitle: "What makes our brew special",
    items: [
      {
        title: "Sustainability",
        description: "We source ethically and minimize our environmental impact at every step.",
        icon: "FiLeaf",
        details: [
          "Direct trade with farmers",
          "Compostable packaging",
          "Energy efficient roasting"
        ]
      },
      {
        title: "Quality",
        description: "Never compromising on the standards that make our coffee exceptional.",
        icon: "FiStar",
        details: [
          "Small batch roasting",
          "Daily quality control",
          "Certified Q Graders"
        ]
      },
      {
        title: "Community",
        description: "Building relationships from farm to café to your home.",
        icon: "FiUsers",
        details: [
          "Local events",
          "Farmer partnerships",
          "Barista training"
        ]
      },
      {
        title: "Innovation",
        description: "Continually exploring new techniques to elevate your coffee experience.",
        icon: "FiZap",
        details: [
          "Experimental processing",
          "Brewing workshops",
          "Seasonal offerings"
        ]
      }
    ]
  },
  certifications: {
    title: "Our Certifications",
    subtitle: "Committed to excellence",
    logos: [
      { src: "/Certificate.jpg", alt: "Organic Certified" },
      { src: "/Certificate.jpg", alt: "Fair Trade Certified" },
      { src: "/Certificate.jpg", alt: "Specialty Coffee Association" }
    ]
  }
};


