import React from "react";
import { useLocation, useParams } from "react-router-dom";

function A05MatchParam() {
  const data = [
    { id: 1, name: "Apples", category: "Fruit", price: 1.2, expiry: 10 },
    { id: 2, name: "Bananas", category: "Fruit", price: 2.42, expiry: 7 },
    { id: 3, name: "Pears", category: "Fruit", price: 2.02, expiry: 6 },
    { id: 4, name: "Tuna", category: "Fish", price: 20.45, expiry: 3 },
    { id: 5, name: "Salmon", category: "Fish", price: 17.93, expiry: 2 },
    { id: 6, name: "Trout", category: "Fish", price: 12.93, expiry: 4 },
  ];

  const params = useParams();
  const location = useLocation();
  const product = data[Number(params.id) - 1];

  // console.log(params)
  // console.log(location);

  return (
    <div>
      <h5>Parameter Component</h5>
      <div>This is Parameter Component</div>
      <br />

      <div>
        Id: {params.id}<br />
        Name: {params.name}<br />
        Location: {location.pathname}
      </div>
      <br />

      <div>
        Id: {product.id}<br />
        Name: {product.name}<br />
        Category: {product.category}
      </div>
    </div>
  );
};
export default A05MatchParam;
