import React from "react";
import { useGlobalContext } from "./Context";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

export default function Item() {
  const { itemData, itemNumber, add, subtract, remove, clearCart } =
    useGlobalContext();

  return (
    <section>
      <h1 className="main-heading">Your Cart</h1>
      <div>
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
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => remove(id)}
                >
                  remove
                </button>
              </div>
              <div className="select-con">
                <IoIosArrowUp className="arrowup" onClick={() => add(id)} />
                <span className="item-number">{itemNumber}</span>
                <IoIosArrowDown
                  className="arrowdown"
                  onClick={() => subtract()}
                />
              </div>
            </div>
          );
        })}
      </div>
      {itemData.length === 0 ? (
        <div className="empty-cart">
          <p>is currently empty</p>
        </div>
      ) : (
        <div>
          <div className="total-con">
            <p className="total total-text">Total</p>
            <p className="total total-price">$1239</p>
          </div>
          <button className="clear-cart" onClick={() => clearCart()}>
            Clear Cart
          </button>
        </div>
      )}
    </section>
  );
}
