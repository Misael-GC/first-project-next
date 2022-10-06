import { useEffect, useState } from "react";
import axios from "axios";

const useGetProduct = (API)=>{
    const [products, setProducts] = useState([]);//el estado inicial es [] porque la api asi esta estructurada

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await axios(API);
			setProducts(response.data);
		}
		fetchProducts();
	},[]);
    return products;
};

export default useGetProduct;