import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import ProductCard from "../NxtTrendzAuthenication/ProductCard";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

export type PrimeDealsType = {
  title: string;
  brand: string;
  price: string;
  id: string;
  image_url: string;
  rating: string;
};

const PrimeDealSection = () => {
  const [primeDeal, setPrimeDeal] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);

  const getPrimeDeals = async () => {
    setApiStatus(apiStatusConstants.inProgress);

    const jwtToken = Cookies.get("jwt_token");

    const apiUrl = "https://apis.ccbp.in/prime-deals";
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    if (response.ok === true) {
      const fetchedData = await response.json();
      const updatedData = fetchedData.prime_deals.map(
        (product: PrimeDealsType) => ({
          title: product.title,
          brand: product.brand,
          price: product.price,
          id: product.id,
          imageUrl: product.image_url,
          rating: product.rating,
        })
      );
      setPrimeDeal(updatedData);
    } else if (response.status === 401) {
      setApiStatus(apiStatusConstants.failure);
    }
    PrimeDealSection();
  };

  useEffect(() => {
    PrimeDealSection();
  });

  const renderPrimeDealsList = () => {
    return (
      <div>
        <h1 className="primedeals-list-heading">Exclusive Prime Deals</h1>
        <ul className="products-list">
          {primeDeal.map((product) => (
            <ProductCard productData={product} />
          ))}
        </ul>
      </div>
    );
  };

  const renderPrimeDealsFailureView = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
      alt="Register Prime"
      className="register-prime-image"
    />
  );

  const renderLoadingView = () => (
    <div className="products-loader-container">
      <Audio color="#0b69ff" height="50" width="50" />
    </div>
  );

  const apiSelectionStatus = () => {
    switch (apiStatus) {
      case apiStatusConstants.success:
        return renderPrimeDealsList();
      case apiStatusConstants.failure:
        return renderPrimeDealsFailureView();
      case apiStatusConstants.inProgress:
        return renderLoadingView();
      default:
        return null;
    }
  };

  return <div>{apiSelectionStatus()}</div>;
};

export default PrimeDealSection;
