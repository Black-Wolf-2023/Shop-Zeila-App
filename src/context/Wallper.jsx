import React from 'react'
import { useState ,useEffect } from 'react';
import { createContext } from 'react'
import axios from 'axios';

export const Context = createContext();



export const Wallper = ({children}) => {
  
  const [loader__status,setLoader] = useState(false);
  const [data,setData] = useState([]);
  const [catogrey__data,setCatogrey] = useState([]);
  async function get__products(){
    const response = await axios.get("https://fakestoreapi.com/products");
    const products = await response.data;
    
    const cat__response = await axios.get('https://api.escuelajs.co/api/v1/products');
    const cat__product = await cat__response.data;
    setCatogrey(cat__product);
    setData(products);
  }  
  useEffect(() =>{
    get__products();
  },[])

  useEffect(() =>{
     if(data.length > 9 && catogrey__data.length > 9){
      setLoader(true);
     }
  },[data])
  return (
    <>
    <Context.Provider value={[loader__status,data,catogrey__data,setData]}>
        {children}
    </Context.Provider>
    </>
  )
}
