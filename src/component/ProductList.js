import React from 'react';
import Product from './Product.js'

export default function ProductList(props){     // this is props way another one is destructure the object i.e {product} 
    // to use props just write (props) and this props object will contain all arguments you pass thorugh calling function and you can use them in 
    // form of object 

    // this props can't be change as they can only be read and used because React follows pure function concept in which if we pass anything inside 
    // the function that doesn't change inside it's value 

    console.log(props)
    return (                    // product object and its index is passed as key
        props.productList.map((product,i)=>{
            return <Product product={product} key={i} />    // this key is to differnciate the objects in props uniquely identify
        })
    )
}