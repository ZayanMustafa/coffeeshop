

export const NAV_ITEMS = [
  { 
    name: 'Home', 
    path: '/', 
    icon: 'FiHome',
    cta: false
  },
  { 
    name: 'Menu', 
    path: '/menu', 
    icon: 'FiCoffee',
    cta: false
  },
  { 
    name: 'Reserve', 
    path: '/reserve', 
    icon: 'FiCalendar',
    cta: true
  },
  { 
    name: 'About', 
    path: '/about', 
    icon: 'FiInfo',
    cta: false
  },
  { 
    name: 'Contact', 
    path: '/contact', 
    icon: 'FiMail',
    cta: false
  }
];

export const NAV_CONFIG = {
  logo: {
    icon: 'FiCoffee',
    text: 'BrewHaven',
    accentText: 'Haven'
  },
  colors: {
    primary: '#6F4E37',
    secondary: '#FFFFFF',
    accent: '#E5B80B',
    darkAccent: '#D4A017',
    dark: '#3E2723'
  },
  ctaButton: {
    text: 'Reserve Now',
    path: '/reserve',
    icon: 'FiCalendar'
  }
};

