import React, { useEffect, useState } from "react";
import "./styles.css";

function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevproducts) => [...prevproducts, ...result.products]);
      }

      // console.log(products);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  return (
    <div className="loadData-container">
      {loading ? (
        <div>Loading your producrs...</div>
      ) : (
        products.length > 0 && (
          <>
            <div className="products-container">
              {products.map((product) => (
                <div key={product.id} className="product">
                  <img src={product.thumbnail} alt={product.title} />
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                  <p>{product.description}</p>
                </div>
              ))}
            </div>

            <div className="products-btn-cont">
              <button
                onClick={() => setCount((preCount) => preCount + 1)}
                disabled={products.length === 100 ? true : false}
              >
                Load More Products
              </button>
            </div>
          </>
        )
      )}
    </div>
  );
}

export default LoadMoreData;
