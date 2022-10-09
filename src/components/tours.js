import React from "react";
import Tour from "./tour";

const Tours = React.memo(({ products, removeItem }) => {
  return (
    <div className="tours">
      <h2 className="head">Our Tours</h2>
      {products.map((product) => {
        return (
          <Tour key={product.id} product={product} removeItem={removeItem} />
        );
      })}
    </div>
  );
});

export default Tours;
