import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

function Iphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/iphone.json")
      .then((response) => response.json())
    .then((data)=>{
        setProducts(data.products);
      })
      .catch((error) => {
        console.error(error, 'cant fetch data');
      });
  }, []);
  // useEffect(() => {
  //   fetch("/iphone.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(() => data.products);
  //     });
  //     ;
  // }, []);

  console.log(products);
  // let order = 1;
  // if (!products || products.length === 0) {
  //   return <p>Loading...</p>;
  // }
  let order = 1;
  return (
    <section className="internal-page-wrapper top-100">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <br></br> <br></br> <br></br>
            <div className="title-wraper bold">Iphones</div>
            <div className="brief-description">The best for the brightest.</div>
          </div>
        </div>
        {products?.map((product) => {
          let order1 = 1;
          let order2 = 2;
          if (order !== 1) {
            order1 = 2;
            order2 = 1;
            order--;
          } else {
            order++;
          }

          let productDiv = (
            <div
              className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
              key={product.product_id}
            >
              <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                <div className="product-title"> {product.product_name}</div>
                <div className="product-brief fs-5">
                  <p> {product.product_brief_description}</p>
                  <br></br>
                  {product.product_description}
                </div>

                <div className="starting-price">
                  <p>Starting Price: {product.starting_price}</p>
                </div>

                <div className="monthly-price">
                  <p>Price Range: {product.price_range}</p>
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <Link to="/">Learn more</Link>
                    </li>
                    <li>
    
                      <Link to="/">Buy Now</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={`col-sm-12 col-md-6 order-${order2}`}>
                <div className="prodict-image">
                  <img src={product.product_img} alt={product.product_name} />
                </div>
              </div>
            </div>
          );
          return productDiv;
        })}
      </div>
    </section>
  );
}
export default Iphone;
