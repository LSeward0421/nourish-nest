import { useState } from "react";
import { getFoodData } from "../api/apiCalls";
import SearchBar from "../components/SearchBar/SearchBar";
import ProductList from "../components/ProductList/ProductList";

const SearchPage = () => {
  const [products, setProducts] = useState([]);

  const search = async (searchTerm) => {
    console.log("Searching For: ", searchTerm);
    try {
      const response = await getFoodData(searchTerm);
      const transformedProducts = response.hints.map((hint) => ({
        image: hint.food.image,
        label: hint.food.label,
      }));
      setProducts(transformedProducts);
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={search} />
      <ProductList products={products} />
    </div>
  );
};

export default SearchPage;
