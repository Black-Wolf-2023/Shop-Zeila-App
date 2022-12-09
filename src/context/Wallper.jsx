import React from 'react'
import { useReducer } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react'


export const Context = createContext();
const GET = "GET";

export const Wallper = ({children}) => {
    const [loader__status,setLoader] = useState(false);
    const [data,setData] = useState([]);
    const [pages,setPages] = useState(30);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '64ace71899msh8537b66ec114372p16cec5jsnae5338ca79ee',
            'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
        }
    };
    
    
    async function get__data(){
        const products = await fetch(`https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=${pages}&categories=men_all&concepts=H%26M%20MAN`,options);
        const response = await products.json();
        setData(response.results);
    }

   useEffect(() => {
     get__data();
   },[])


  useEffect(() => {
    get__data();
  },[pages]) 
   useEffect(() => {
      if(data.length > 0){
         setLoader(true);
        console.log(data);
      }
   },[data]) 


  return (
    <>
    <Context.Provider value={[loader__status,data,setPages]}>
        {children}
    </Context.Provider>
    </>
  )
}
