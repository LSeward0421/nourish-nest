import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Oops! This page you're looking for doesn't exist.</p>
      <Link to="/" className="back-home-link">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
