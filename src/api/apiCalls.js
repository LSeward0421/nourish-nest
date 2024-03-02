import defaultImage from '../assets/NN_default_img.png'
import { filterExemptCategories } from '../utils/utils';

const getFoodData = async (searchTerm = '', nextPageUrl = '') => {
  try {
    const appId = import.meta.env.VITE_API_ID;
    const appKey = import.meta.env.VITE_API_KEY;
    let url = nextPageUrl;

    if (!url) {
      url = `https://api.edamam.com/api/food-database/v2/parser?app_id=${appId}&app_key=${appKey}&ingr=${encodeURIComponent(searchTerm)}&nutrition-type=cooking`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    const filteredProducts = filterExemptCategories(data.hints)
    return {
      products: filteredProducts.map(hint => ({
        image: hint.food.image || defaultImage,
        label: hint.food.label,
        brand: hint.food.brand || null,
        category: hint.food.category
      })),
      nextPageUrl: data._links?.next?.href || null,
    };
  } catch (error) {
    console.error('There was a problem fetching the food data:', error);
    throw error;
  }
};

export { getFoodData };