import { fetchAllproducts } from "../api";
import { useState, useEffect } from "react";

export default function Productpage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const products = await fetchAllproducts();
      setProducts(products);
    }
    fetchData();
  }, []);
  return (
    <div className="productpage">
      <div className="productcontainer">
        {products.map((product) => (
          <div key={product.id}>
            <p className="products">
              {product.id} {product.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
