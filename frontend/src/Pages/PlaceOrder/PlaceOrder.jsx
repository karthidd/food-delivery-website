import React, { useContext } from 'react'
import '../PlaceOrder/PlaceOrder.css'
import { Form } from 'react-router-dom'
import { StoreContext } from '../../Components/Context/StoreContext'

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="email" placeholder='Email Address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Pin code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="number" placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <p className='title'>Cart Total</p>
        <div className="cart-total-details">
          <p>Subtotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Delivery Fee</p>
          <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <b>Total</b>
          <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
        </div>
        <button>PROCEED TO CHECK OUT</button>
      </div>
    </form>
  )
}

export default PlaceOrder
