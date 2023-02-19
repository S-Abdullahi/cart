import React from "react";
import { useGlobalContext } from "./Context";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Loading from './Loading'

export default function Item() {
  const {  add, subtract, remove, clearCart, state } =
    useGlobalContext();

  if(state.loading){
    console.log('test loading')
    return <Loading/>
  }

  return (
    <section>
      <h1 className="main-heading">Your Cart</h1>
      <div>
        {state.items.map((item) => {
          const { id, title, price, img, amount } = item;

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
                <span className="item-number">{amount}</span>
                <IoIosArrowDown
                  className="arrowdown"
                  onClick={() => subtract(id)}
                />
              </div>
            </div>
          );
        })}
      </div>
      {state.items.length < 1 ? (
        <div className="empty-cart">
          <p>is currently empty</p>
        </div>
      ) : (
        <div>
          <div className="total-con">
            <p className="total total-text">Total</p>
            <p className="total total-price">$ {state.total.toFixed(2)}</p>
          </div>
          <button className="clear-cart" onClick={() => clearCart()}>
            Clear Cart
          </button>
        </div>
      )}
    </section>
  );
}
