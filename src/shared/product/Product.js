import React from "react";

const ProductCard = () => {
  return (
    <div className="product">
      <div className="product-img">
        <img
          src="https://ld-wt73.template-help.com/tf/airy/images/product-01-510x510.jpg"
          alt=""
        />
      </div>
      <h4 className="product-name"> Producnt name</h4>
      <div className="cost">
        <p className="price"></p>
      </div>
    </div>
  );
};

export default ProductCard;
