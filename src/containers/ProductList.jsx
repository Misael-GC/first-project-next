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
			{products.map((product) => {
          if (product.images.length > 0 && product.images[0] !== '' && product.images[0].startsWith('https://')) {
            return <ProductItem product={product} key={product.id} />;
          }
        })}
			</div>
		</section>
	);
};

export default ProductList;