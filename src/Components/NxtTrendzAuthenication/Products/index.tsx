import React from "react";
import PrimeDealSection from "../../PrimeDealsSection";
import AllProductSession from "../AllProductSession";

import HeaderPage from "../Header";

const ProductsPage = () => {
  return (
    <>
      <HeaderPage />
      <div>
        <PrimeDealSection />
        <AllProductSession />
      </div>
    </>
  );
};

export default ProductsPage;
