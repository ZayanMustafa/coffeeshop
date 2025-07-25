

export const subscribeToNewsletter = async (email) => {
  // In a real app, this would connect to your backend
  console.log("Subscribing email:", email);
  
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
};