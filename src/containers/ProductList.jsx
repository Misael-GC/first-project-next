import React from 'react';
import useGetProduct from '@hooks/useGetProduct';
import ProductItem from '@components/ProductItem';
import styles from '@styles/ProductList.module.scss';


const API = process.env.NEXT_PUBLIC_API;

const ProductList = () => {
	const products = useGetProduct(API);

	return (
		<section className={styles['main-container']}>
			<div className={styles.ProductList}>
				{products.map(product =>(
					<ProductItem product={product} key={product.id}/> /* aqui está el productList el cual escucha al custm hook y la API*/
				))}
			</div>
		</section>
	);
}

export default ProductList;