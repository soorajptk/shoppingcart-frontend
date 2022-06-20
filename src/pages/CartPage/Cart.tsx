import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useSelector } from "react-redux";

function Cart() {
  const {AuthReducer:{user}}=useSelector((state:any)=>state)
  const [cart,setCartItems]=useState([])
  useEffect(()=>{
    async function fetchCart(){
      const response=await axios({method:'get',url:`http://localhost:5000/api/v1/product/cart/${user.response.id}`,headers:{"Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjcsImlhdCI6MTY1NTI4Mzc2MSwiZXhwIjoxNjU3ODc1NzYxfQ.6ZcpRkFO1kOCp4MGohF9zWIgCHyIqYmN3tz02fl_vlE"}})
    console.log(response,"iiiiiiiiiiiiiiiiiii");
      setCartItems(response.data)
    }
    fetchCart()
  },[])
  // console.log(cart,"uuuuuuuuuuuuuuuuu");
  
  return (
    <div>
      <ul>
        {
          cart.map((item:any,ind)=>{
            return <li key={ind}>{item.product_name}</li>
          })
        }
      </ul>
    </div>
  )
}

export default Cart