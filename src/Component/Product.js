import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Store/productSlice";
import { add } from "../Store/cartSlice";
import { Card, Button } from 'react-bootstrap';

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const addToCart = (product) => {
    dispatch(add(product));
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error occurred while fetching products.</div>;
  }

  return (
    <div className="container-fluid pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">Trendy Products</span>
        </h2>
      </div>
      <div className="row px-xl-5 pb-3">
        {products.map((product) => (
          <div
            className="col-lg-3 col-md-6 col-sm-12 pb-1"
            key={product.id}
          >
            <div className="card product-item border-0 mb-4">
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                <img
                  className="img-fluid w-100"
                  src={product.image}
                  alt={product.name}
                  style={{
                    maxHeight: '280px',
                    objectFit:'scale-down'
                  }}
                />
              </div>
              <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">{product.name}</h6>
                <div className="d-flex justify-content-center">
                  <h6>${product.discountPrice}</h6>
                  <h6 className="text-muted ml-2">
                    <del>${product.price}</del>
                  </h6>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-between bg-light border">
                <a href="" className="btn btn-sm text-dark p-0">
                  <i className="fas fa-eye text-primary mr-1"></i>
                  View Detail
                </a>
                <button
                  className="btn btn-sm text-dark p-0"
                  onClick={() => addToCart(product)}
                >
                  <i className="fas fa-shopping-cart text-primary mr-1"></i>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
