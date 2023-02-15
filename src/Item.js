import React from "react";
import { useGlobalContext } from "./Context";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function Item() {
  const { itemData } = useGlobalContext();
  console.log(itemData);
  return (
    <section>
      <h1 className="main-heading">Your Cart</h1>
      <div className="">
        {itemData.map((item) => {
          const { id, title, price, img } = item;

          return (
            <div key={id} className="item-con">
              <div className="image-con">
                <img src={img} alt="phone" className="image" />
              </div>
              <div className="item-detail-con">
                <p className="item-name">{title}</p>
                <p className="item-price">${price}</p>
                <button type="button" className="remove-btn">
                  remove
                </button>
              </div>
              <div className="select-con">
                <IoIosArrowUp className="arrowup" />
                <span className="item-number">1</span>
                <IoIosArrowDown className="arrowdown" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
