import { useNavigate } from "react-router-dom";
import './HomePage.css'

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Nourish Nest!</h1>
      <p className="home-msg">Find fresh groceries and more for your healthy lifestyle.</p>
      <button className="home-search-btn" onClick={() => navigate("/search")}>Start Shopping!</button>
    </div>
  );
};

export default HomePage;
