import React,{useEffect} from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { ProductComponent } from "./ProductComponent";
import { fetchProducts, setProducts } from "../redux/actions/productAction";

export const ProductListing = () => {
    const dispatch = useDispatch()

    // const fetchProducts = async() => {
    //     const response = await axios.get('https://fakestoreapi.com/products').catch(err => {
    //         console.log(err)
    //     })
    //     dispatch(setProducts(response.data))
    // } 
    useEffect(()=>{
        // fetchProducts()
        dispatch(fetchProducts())
    },[])
    return (
        <div className="ui grid">
            <ProductComponent/>
        </div>
      );
}