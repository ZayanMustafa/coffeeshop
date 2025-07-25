export const MENU_DATA = {
  categories: [
    {
      id: "espresso",
      name: "Espresso Classics",
      description: "Our handcrafted espresso beverages made with single-origin beans",
      items: [
        {
          id: "espresso-1",
          name: "Haven Espresso",
          description: "Single shot of our signature espresso blend",
          price: 3.5,
          featured: true,
          details: {
            origin: "Colombia, Brazil, Ethiopia blend",
            roastLevel: "Medium-Dark",
            tastingNotes: ["Chocolate", "Caramel", "Nutty"],
            brewTime: "25-30 seconds",
            servingSize: "2oz",
            caffeineContent: "75mg per shot",
            bestPairings: ["Chocolate desserts", "Biscotti", "Morning breakfast"]
          },
          options: [
            {
              name: "Single",
              price: 3.5,
              details: {
                size: "2oz",
                shots: 1
              }
            },
            {
              name: "Double",
              price: 4.5,
              details: {
                size: "3oz",
                shots: 2
              }
            }
          ]
        },
        {
          id: "espresso-2",
          name: "Cappuccino Artisan",
          description: "Espresso with velvety steamed milk and foam",
          price: 4.75,
          featured: false,
          details: {
            origin: "Ethiopian Yirgacheffe",
            roastLevel: "Medium",
            tastingNotes: ["Floral", "Berry", "Citrus"],
            milkType: "Whole milk",
            foamTexture: "Velvety microfoam",
            idealTemp: "150°F",
            artStyles: ["Heart", "Rosetta", "Tulip"]
          },
          options: [
            {
              name: "Traditional",
              price: 4.75,
              details: {
                size: "8oz",
                milkRatio: "1/3 espresso, 1/3 milk, 1/3 foam"
              }
            },
            {
              name: "Extra Foam",
              price: 5.0,
              details: {
                size: "8oz",
                milkRatio: "1/3 espresso, 1/4 milk, 5/12 foam"
              }
            }
          ]
        },
        {
          id: "espresso-3",
          name: "Latte Bliss",
          description: "Smooth espresso with steamed milk and a hint of vanilla",
          price: 4.25,
          featured: false,
          details: {
            origin: "Sumatra Mandheling",
            roastLevel: "Dark",
            tastingNotes: ["Earthy", "Spicy", "Chocolate"],
            milkType: "Oat milk",
            flavoring: "Vanilla syrup",
            idealTemp: "160°F",
            latteArtStyles: ["Heart", "Leaf"]
          },
          options: [
            {
              name: "Regular",
              price: 4.25,
              details: {
                size: "12oz",
                milkRatio: "1/2 espresso, 1/2 milk"
              }
            },
            {
              name: "Vanilla Latte",
              price: 4.75,
              details: {
                size: "12oz",
                milkRatio: "1/2 espresso, 1/2 milk, 1 pump vanilla syrup"
              }
            }
          ]
        },
        {
          id: "espresso-4",
          name: "Mocha Delight",
          description: "Rich espresso with chocolate and steamed milk",
          price: 5.0,
          featured: true,
          details: {
            origin: "Guatemalan Antigua",
            roastLevel: "Medium-Dark",
            tastingNotes: ["Chocolate", "Caramel", "Nutty"],
            milkType: "Almond milk",
            chocolateType: "Dark chocolate syrup",
            idealTemp: "155°F",
            toppings: ["Whipped cream", "Chocolate shavings"]
          },
          options: [
            {
              name: "Regular",
              price: 5.0,
              details: {
                size: "12oz",
                milkRatio: "1/2 espresso, 1/2 milk, 1 pump chocolate syrup"
              }
            },
            {
              name: "Extra Chocolate",
              price: 5.5,
              details: {
                size: "12oz",
                milkRatio: "1/2 espresso, 1/2 milk, 2 pumps chocolate syrup"
              }
            }
          ]
        },
        {
          id: "espresso-5",
          name: "Flat White",
          description: "A double shot of espresso with velvety steamed milk",
          price: 4.75,
          featured: false,
          details: {
            origin: "Brazilian Santos",
            roastLevel: "Medium",
            tastingNotes: ["Nutty", "Caramel", "Chocolate"],
            milkType: "Whole milk",
            idealTemp: "150°F",
            milkTexture: "Microfoam",
            servingSize: "6oz"
          },
          options: [
            {
              name: "Regular",
              price: 4.75,
              details: {
                size: "6oz",
                shots: 2,
                milkRatio: "1/2 espresso, 1/2 milk"
              }
            },
            {
              name: "Extra Shot",
              price: 5.25,
              details: {
                size: "6oz",
                shots: 3,
                milkRatio: "1/3 espresso, 2/3 milk"
              }
            }
          ]
        },
        {
          id: "espresso-6",
          name: "Affogato",
          description: "A scoop of vanilla ice cream topped with a shot of espresso",
          price: 4.0,
          featured: false,
          details: {
            origin: "Colombian Supremo",
            roastLevel: "Medium-Dark",
            tastingNotes: ["Caramel", "Chocolate", "Nutty"],
            iceCreamType: "Vanilla bean",
            idealTemp: "Hot espresso over cold ice cream",
            servingSize: "4oz espresso, 1 scoop ice cream"
          },
          options: [
            {
              name: "Regular",
              price: 4.0,
              details: {
                size: "4oz espresso, 1 scoop ice cream"
              }
            },
            {
              name: "Double Shot",
              price: 4.5,
              details: {
                size: "6oz espresso, 1 scoop ice cream"
              }
            }
          ]
        }
      ]
    },
    {
      id: "brew",
      name: "Pour Over Brews",
      description: "Small batch pour overs highlighting unique flavor profiles",
      items: [
        {
          id: "brew-1",
          name: "Ethiopian Yirgacheffe",
          description: "Floral notes with blueberry undertones",
          price: 5.5,
          featured: true,
          details: {
            origin: "Yirgacheffe, Ethiopia",
            process: "Washed",
            elevation: "1900-2200m",
            roastLevel: "Light",
            tastingNotes: ["Jasmine", "Blueberry", "Lemon"],
            brewMethod: "V60 pour over",
            brewTime: "3:30 minutes",
            waterTemp: "205°F",
            grindSize: "Medium-fine"
          },
          options: [
            {
              name: "12oz",
              price: 5.5,
              details: {
                coffeeDose: "22g",
                waterVolume: "360ml"
              }
            },
            {
              name: "16oz",
              price: 6.5,
              details: {
                coffeeDose: "30g",
                waterVolume: "480ml"
              }
            }
          ]
        },
        {
          id: "brew-2",
          name: "Sumatra Mandheling",
          description: "Earthy tones with a full body",
          price: 5.75,
          featured: false,
          details: {
            origin: "Sumatra, Indonesia",
            process: "Wet-hulled",
            elevation: "1200-1500m",
            roastLevel: "Dark",
            tastingNotes: ["Earthy", "Spicy", "Chocolate"],
            brewMethod: "Chemex",
            brewTime: "4:00 minutes",
            waterTemp: "200°F",
            grindSize: "Coarse"
          },
          options: [
            {
              name: "12oz",
              price: 5.75,
              details: {
                coffeeDose: "24g",
                waterVolume: "360ml"
              }
            },
            {
              name: "16oz",
              price: 6.75,
              details: {
                coffeeDose: "32g",
                waterVolume: "480ml"
              }
            }
          ]
        }
      ]
    },
    {
      id: "cold-brew",
      name: "Cold Brew Specials",
      description: "Smooth, slow-steeped cold brews for a refreshing experience",
      items: [
        {
          id: "cold-brew-1",
          name: "Classic Cold Brew",
          description: "Smooth and rich cold brew steeped for 12 hours",
          price: 4.5,
          featured: true,
          details: {
            origin: "Colombian Supremo",
            roastLevel: "Medium-Dark",
            tastingNotes: ["Chocolate", "Caramel", "Nutty"],
            brewMethod: "Immersion",
            brewTime: "12 hours",
            waterTemp: "Room temperature",
            grindSize: "Coarse"
          },
          options: [
            {
              name: "12oz",
              price: 4.5,
              details: {
                coffeeDose: "60g",
                waterVolume: "720ml"
              }
            },
            {
              name: "16oz",
              price: 5.5,
              details: {
                coffeeDose: "80g",
                waterVolume: "960ml"
              }
            }
          ]
        },
        {
          id: "cold-brew-2",
          name: "Vanilla Bean Cold Brew",
          description: "Cold brew infused with natural vanilla bean flavor",
          price: 5.0,
          featured: false,
          details: {
            origin: "Brazilian Santos",
            roastLevel: "Medium",
            tastingNotes: ["Nutty", "Caramel", "Vanilla"],
            brewMethod: "Immersion with vanilla bean infusion",
            brewTime: "12 hours",
            waterTemp: "Room temperature",
            grindSize: "Coarse"
          },
          options: [
            {
              name: "12oz",
              price: 5.0,
              details: {
                coffeeDose: "60g + 1/2 vanilla bean",
                waterVolume: "720ml"
              }
            },
            {
              name: "16oz",
              price: 6.0,
              details: {
                coffeeDose: "80g + 1 vanilla bean",
                waterVolume: "960ml"
              }
            }
          ]
        },
        {
          id: "cold-brew-3",
          name: "Coconut Cold Brew",
          description: "Refreshing cold brew with a hint of coconut",
          price: 5.5,
          featured: false,
          details: {
            origin: "Hawaiian Kona",
            roastLevel: "Medium-Light",
            tastingNotes: ["Coconut", "Caramel", "Nutty"],
            brewMethod: "Immersion with coconut water",
            brewTime: "12 hours",
            waterTemp: "Room temperature",
            grindSize: "Coarse"
          },
          options: [
            {
              name: "12oz",
              price: 5.5,
              details: {
                coffeeDose: "60g + 120ml coconut water",
                waterVolume: "600ml"
              }
            },
            {
              name: "16oz",
              price: 6.5,
              details: {
                coffeeDose: "80g + 160ml coconut water",
                waterVolume: "800ml"
              }
            }
          ]
        }
      ]
    },
    {
      id: "tea",
      name: "Artisan Teas",
      description: "Hand-selected loose leaf teas from around the world",
      items: [
        {
          id: "tea-1",
          name: "Jasmine Green Tea",
          description: "Delicate green tea infused with jasmine blossoms",
          price: 3.5,
          featured: true,
          details: {
            origin: "China",
            type: "Green tea",
            tastingNotes: ["Floral", "Sweet", "Refreshing"],
            steepTime: "2-3 minutes",
            waterTemp: "175°F",
            servingSize: "8oz"
          },
          options: [
            {
              name: "Loose Leaf",
              price: 3.5,
              details: {
                amount: "2g per cup"
              }
            },
            {
              name: "Iced",
              price: 4.0,
              details: {
                amount: "2g per cup, served over ice"
              }
            }
          ]
        },
        {
          id: "tea-2",
          name: "Earl Grey Black Tea",
          description: "Classic black tea with bergamot oil and lavender",
          price: 3.75,
          featured: false,
          details: {
            origin: "India, Assam",
            type: "Black tea",
            tastingNotes: ["Citrus", "Floral", "Bold"],
            steepTime: "3-5 minutes",
            waterTemp: "200°F",
            servingSize: "8oz"
          },
          options: [
            {
              name: "Loose Leaf",
              price: 3.75,
              details: {
                amount: "2g per cup"
              }
            },
            {
              name: "Iced",
              price: 4.25,
              details: {
                amount: "2g per cup, served over ice"
              }
            }
          ]
        },
        {
          id: "tea-3",
          name: "Chamomile Herbal Tea",
          description: "Soothing herbal tea made from chamomile flowers",
          price: 3.25,
          featured: false,
          details: {
            origin: "Egypt",
            type: "Herbal tea",
            tastingNotes: ["Floral", "Sweet", "Calming"],
            steepTime: "5-7 minutes",
            waterTemp: "200°F",
            servingSize: "8oz"
          },
          options: [
            {
              name: "Loose Leaf",
              price: 3.25,
              details: {
                amount: "2g per cup"
              }
            },
            {
              name: "Iced",
              price: 3.75,
              details: {
                amount: "2g per cup, served over ice"
              }
            }
          ]
        }
      ]
    }
  ],
  theme: {
    colors: {
      primary: "#3E2723",
      secondary: "#6F4E37",
      accent: "#E5B80B",
      light: "#C4A484",
      background: "#F9F5F0",
      success: "#4CAF50",
      error: "#F44336",
      warning: "#FFC107",
      info: "#2196F3"
    },
    fonts: {
      heading: "'Playfair Display', serif",
      body: "'Inter', sans-serif",
      decorative: "'Dancing Script', cursive",
      mono: "'Roboto Mono', monospace"
    },
    spacing: {
      small: "8px",
      medium: "16px",
      large: "24px",
      xlarge: "32px"
    },
    breakpoints: {
      mobile: "480px",
      tablet: "768px",
      desktop: "1024px",
      wide: "1200px"
    }
  },
  cartMessages: [
    "Added to your brew! ☕",
    "That's a great choice! 👍",
    "Perfect selection! ✨",
    "Your taste is impeccable! 👌",
    "Another coffee adventure! 🌍",
    "That'll warm you up! 🔥",
    "Barista approved! 👨‍🍳",
    "One of our favorites! ❤️",
    "Excellent pick! 🏆",
    "Can't go wrong with this! 😊"
  ],
  notifications: {
    position: "top-center",
    duration: 3000,
    animation: {
      enter: {
        opacity: 0,
        y: -50,
        scale: 0.9
      },
      exit: {
        opacity: 0,
        y: -20,
        scale: 0.95
      }
    }
  },
  taxRate: 0.8,
  shippingOptions: [
    {
      name: "Pickup",
      price: 0,
      description: "Collect in-store"
    },
    {
      name: "Standard",
      price: 3.99,
      description: "3-5 business days"
    },
    {
      name: "Express",
      price: 7.99,
      description: "1-2 business days"
    }
  ]
};
