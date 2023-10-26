import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../component/CartItem";
function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      <div>
        {
        cart.length > 0 ?  
        (
          <div className="flex lg:max-w-6xl p-2 mx-auto lg:min-h-[80vh] lg:h-[80vh] lg:flex-row flex-col w-full  ">
            <div>
              {cart.map((item, index) => (
                <CartItem
                  key={item.id}
                  item={item}
                  itemIndex={index}
                ></CartItem>
              ))}
            </div>
              


            <div className="flex flex-col justify-between mt-6 lg:w-[30%] md:w-[30%]">
              <div>
                <div className="font-semibold text-xl uppercase text-slate-700">Your cart</div>
                <div className="font-bold text-3xl uppercase text-green-700">Summary</div>
                <p className="font-semibold text-sm text-slate-500">
                <span className="text-black">Total Items: {cart.length}</span>
                </p>
              </div>

              <div>
              <p className="font-bold text-slate-700">Total Amount: <span className="text-green-600">${totalAmount}</span></p>
              <button className="w-full bg-green-700 text-white rounded-md py-2 font-bold px-9">Checkout Now</button>
            </div>
            </div>

            
          <div>
        
      </div>
          </div>

          
        )
        :
        (
          <div className="h-[100vh] w-full flex flex-col justify-center items-center gap-4">
            <h1 className="font-bold text-3xl text-slate-700">Cart Empty</h1>
            <NavLink to={"/"}>
              <button className="bg-green-700 text-white py-2 px-4 rounded-md font-bold">Shop Now</button>
            </NavLink>
          </div>
        ) 
       
        }

      
      </div>

      
      
    </div>
  );
}

export default Cart;
