
import React, { useState } from "react";
import axios from "axios";

const IponeForm = () => {
  const [iphoneId, setIphoneId] = useState("");
  const [product_img, setImgPath] = useState("");
  const [product_Link, setIphonerul] = useState("");
  const [product_name, setIphoneTitle] = useState("");
  const [price_range, setPriceRange] = useState("");
  const [starting_price, setStartPrice] = useState("");
  const [product_brief_description, setBriefDescription] = useState("");
  const [product_description, setFullDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to insert data into the tables
    axios
      .post("http://localhost:6006/insertData", {
        iphoneId,
        product_img,
        product_Link,
        product_name,
        price_range,
        starting_price,
        product_brief_description,
        product_description,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        iPhone ID:
        <input
          type="text"
          value={iphoneId}
          onChange={(e) => setIphoneId(e.target.value)}
        />
      </label>
      <label>
        Image Path:
        <input
          type="text"
          value={product_img}
          onChange={(e) => setImgPath(e.target.value)}
        />
      </label>
      <label>
        Product URL:
        <input
          type="text"
          value={product_Link}
          onChange={(e) => setIphonerul(e.target.value)}
        />
      </label>
      <label>
        Product Name:
        <input
          type="text"
          value={product_name}
          onChange={(e) => setIphoneTitle(e.target.value)}
        />
      </label>
      <label>
        Price Range:
        <input
          type="text"
          value={price_range}
          onChange={(e) => setPriceRange(e.target.value)}
        />
      </label>
      <label>
        Starting Price:
        <input
          type="text"
          value={starting_price}
          onChange={(e) => setStartPrice(e.target.value)}
        />
      </label>
      <label>
        Brief Description:
        <input
          type="text"
          value={product_brief_description}
          onChange={(e) => setBriefDescription(e.target.value)}
        />
      </label>
      <label>
        Full Description:
        <input
          type="text"
          value={product_description}
          onChange={(e) => setFullDescription(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default IponeForm;
