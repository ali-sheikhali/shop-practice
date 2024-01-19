import React from 'react'
import { useSelector } from 'react-redux'
function Cart() {
    const productItem = useSelector((state) => state.cart)
  return (
    <div>
        {productItem.title}
    </div>
  )
}

export default Cart