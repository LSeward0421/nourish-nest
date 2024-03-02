import { useState } from "react";
import { getFoodData } from "../api/apiCalls";
import SearchBar from "../components/SearchBar/SearchBar";
import ProductList from "../components/ProductList/ProductList";
import "./SearchPage.css";
import { organizeProducts } from "../utils/utils";

const SearchPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [nextPageUrl, setNextPageUrl] = useState(null);

  const search = async (searchTerm) => {
    setLoading(true);
    setError("");

    try {
      const { products, nextPageUrl } = await getFoodData(searchTerm);
      if(products.length === 0) {
        setError("No results found. Please try again.");
        setProducts([]);
        setNextPageUrl(null);
      } else {
        setProducts(organizeProducts(products));
        setNextPageUrl(nextPageUrl);
      }
    } catch (error) {
      setError("Uh-oh! Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  const loadMore = async () => {
    if (!nextPageUrl || loading) return;
    setLoading(true);
    setError("");

    try {
      const { products: newProducts, nextPageUrl: newNextPageUrl } =
        await getFoodData(null, nextPageUrl);
      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setNextPageUrl(newNextPageUrl);
    } catch (error) {
      setError("Failed to get more options. Please try again.");
      console.error("Load more error:", error);
    }
    setLoading(false);
  };

  const handleClearSearch = () => {
    setProducts([]);
    setNextPageUrl(null);
  };

  return (
    <div>
      <SearchBar onSearch={search} onClear={handleClearSearch} />
      {error && <p className="error-message">{error}</p>}
      <ProductList products={products} addToCart={addToCart}  />
      {loading && <p>Loading...</p>}
      {nextPageUrl && (
        <button className="load-more-btn" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default SearchPage;
