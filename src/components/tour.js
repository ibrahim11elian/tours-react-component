import React, { useState } from "react";

function Tour({ product, removeItem }) {
  const [readMore, setReadMore] = useState(false);
  const { name, info, price, image, id } = product;
  const url = image || "https://picsum.photos/500";
  return (
    <section className="tour">
      <div className="image">
        <img src={url} alt="" />
      </div>
      <div className="info">
        <div className="title">
          <h4 className="name">{name}</h4>
          <h4 className="price">${price}</h4>
        </div>
        <p className="about">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className="btn-read" onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
      </div>
      <button className="btn" onClick={() => removeItem(id)}>
        Not Interested
      </button>
    </section>
  );
}

export default Tour;
