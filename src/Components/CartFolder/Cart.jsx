import React, { useEffect, useState } from 'react'
import './cart.css'

const Cart=(props)=> {
     const [price, setPrice] = useState(0);

    const handlePrice = ()=>{
        let ans = 0;
        props.cart.map((item)=>(
            ans += item.quantity * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const a = props.cart.filter((item)=>item.id !== id);
        props.setCart(a);
    }
     useEffect(()=>{
        handlePrice();
    })
    

  return (
    <div>
        
      {props.cart.map((i)=>{
        return(
            <div className="cart_box" key={i.id}>
                    <div className="cart_img">
                        <img src={i.imgUrl} alt='#' />
                        <p>{i.itemname}</p>
                    </div>
                    <div>
                        <button onClick={()=>props.handleChange(i, +1)}> + </button>
                        <button>{i.quantity}</button>
                        <button onClick={()=>props.handleChange(i, -1)}> - </button>
                    </div>
                    <div>
                        <span>{i.price}</span>
                        <button onClick={()=>handleRemove(i.id)}>Remove</button>
                    </div>
                </div>
        )
      })}
      <div className='total'>
            <span>Total Price of your Cart</span>
            <span>Rs - {price}</span>
        </div>
        {/* <button>Check Out</button> */}
    </div>
  )
}

export default Cart
