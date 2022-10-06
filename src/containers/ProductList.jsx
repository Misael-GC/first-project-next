import React from 'react';
import useGetProduct from '@hooks/useGetProduct';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';


const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const products = useGetProduct(API);

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product =>(
					<ProductItem product={product} key={product.id}/> /* aqui está el productList el cual escucha al custm hook y la API*/
				))}
			</div>
		</section>
	);
}

export default ProductList;
