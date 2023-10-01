import React from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

const SearchItems = ({ product, value, onSearch }) => {
  return (
    <>
      <section className="searchItems">
        <div className="product_items">
          {product
            .filter((items) => {
              const searchkey = value.toLowerCase();
              const title = items.title.toLowerCase();
              return (
                searchkey && title.startsWith(searchkey) && title !== searchkey
              );
            })
            .slice(0, 10)
            .map((items) => (
              <div className="box" key={items.id}>
                <div className="img">
                  <img src={items.cover} alt={items.title} />
                  <div className="overlay">
                    <button className="button">
                      <FiShoppingBag />
                    </button>
                    <button className="button">
                      <AiOutlineHeart />
                    </button>
                    <button className="button">
                      <FiSearch />
                    </button>
                  </div>
                </div>
                <div className="details">
                  <h3>{items.title}</h3>
                  <p>{items.author}</p>
                  <h4>price: ${items.price}</h4>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default SearchItems;
