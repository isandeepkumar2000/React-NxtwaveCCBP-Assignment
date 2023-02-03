import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import ProductsHeader from "../../ProductsHeader";
import HeaderPage from "../Header";
import ProductCard from "../ProductCard";

const sortByOptions = [
  {
    optionId: "PRICE_HIGH",
    displayText: "Price (High-Low)",
  },
  {
    optionId: "PRICE_HIGH",
    displayText: "Price (High-Low)",
  },
];

export type HeaderPageType = {
  title: string;
  brand: string;
  price: string;
  id: string;
  imageUrl: string;
  rating: string;
  image_url: string;
  optionId: string;
  displayText: string;
};

const AllProductSession = () => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeOptionId, setActiveOptionId] = useState(
    sortByOptions[0].optionId
  );

  const getProduct = async () => {
    setIsLoading;

    const jwtToken = Cookies.get("jwt_token");

    const apiUrl = `https://apis.ccbp.in/products?sort_by=${setActiveOptionId}`;
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    if (response.ok) {
      const fetchedData = await response.json();
      console.log(fetchedData, "hyyy");
      const updatedData = fetchedData.products.map(
        (product: HeaderPageType) => ({
          title: product.title,
          brand: product.brand,
          price: product.price,
          id: product.id,
          imageUrl: product.image_url,
          rating: product.rating,
        })
      );
      ({ productsList: updatedData, isLoading: false });
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const updatedActiveOptionId = (activeOptionId: any) => {
    const getProductDetails = getProduct();
    //  ( {setActiveOptionId} , getProduct);
  };

  const renderProductsList = () => {
    return (
      <>
        <ProductsHeader
          activeOptionId={activeOptionId}
          sortByOptions={sortByOptions}
          updatedActiveOptionId={updatedActiveOptionId}
        />
        <ul className="products-list">
          {productList.map((product) => (
            <ProductCard productData={product} />
          ))}
        </ul>
      </>
    );
  };

  const renderLoader = () => (
    <div className="products-loader-container">
      <Audio color="#0b69ff" height="50" width="50" />
    </div>
  );

  return (
    <>
      <HeaderPage />

      {isLoading ? renderLoader() : renderProductsList()}
    </>
  );
};

export default AllProductSession;
