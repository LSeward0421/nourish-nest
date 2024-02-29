const getFoodData = async (ingredient) => {
  try {
    const appId = import.meta.env.VITE_API_ID;
    const appKey = import.meta.env.VITE_API_KEY;
    const response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?app_id=${appId}&app_key=${appKey}&ingr=${encodeURIComponent(ingredient)}&nutrition-type=cooking`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem fetching the food data:', error);
  }
}

export { getFoodData };
