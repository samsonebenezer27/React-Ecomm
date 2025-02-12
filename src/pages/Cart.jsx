import React, { useState } from 'react';

const Cart = ({ array }) => {
  const [cartItems, setCartItems] = useState(array);
  const [totalAmount, setTotalAmount] = useState(() =>
    array.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
  );

  const handleAdd = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = (updatedCart[index].quantity || 1) + 1;
    setCartItems(updatedCart);
    updateTotal(updatedCart);
  };

  const handleSub = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) 
      {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
      updateTotal(updatedCart);
    }
  };

  const updateTotal = (updatedCart) => {
    const newTotal = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalAmount(newTotal);
  };

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg">
            {cartItems.map((cart, index) => (
              <div className="cart" key={index}>
                <div className="cart-container1 w-85 m-1">
                  <div className="img d-flex justify-content-center">
                    <img src={cart.img} alt="product" className="imagg" />
                  </div>
                  <h5 className="price">
                    PRICE: <span>&#8377;</span>{cart.price}
                  </h5>
                  <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-dark" onClick={() => handleSub(index)}>
                      SUB
                    </button>
                    <span>{cart.quantity || 1}</span>
                    <button className="btn btn-dark" onClick={() => handleAdd(index)}>
                      ADD
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg my-1">
            <div className="p-4 border">
              <h4 className="mb-2">Order Summary</h4>
              <p className="d-flex justify-content-between">
                <span>Subtotal: <span>&#8377;</span>{totalAmount}</span>
              </p>
              <button className="btn btn-dark w-100 mt-3">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
