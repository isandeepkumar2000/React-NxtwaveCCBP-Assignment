
import React from "react";

import HeaderPage from "../Header";


const sortbyOption = [ 
  {
otionId: 'PRICE_HIGH',
  displayText: 'Price (High-Low)',
  },
   {
otionId: 'PRICE_LOW',
  displayText: 'Price (Low-High)',
  },
]

const ProductsPage = () => {
 
  return (
    <>
      <HeaderPage />
      <div>ProductsPage</div>
    </>
  );
};

export default ProductsPage;
