import React, { useContext } from 'react';
import Image from 'next/image';
import addCartImage from '@icons/bt_add_to_cart.svg';
import AppContext from '@context/AppContext';
import styles from '../styles/ProductItem.module.scss';




const ProductItem = ({product}) => {
	const { addToCart } = useContext(AppContext); //conexios -> checa App.jsx

	const handleClick = (item) => {
		addToCart(item);//agregar un producto al carrito
	};
	
	return (
		<div className={styles.ProductItem}>
			<Image src={product.images[0]} alt={product.title} width={50} height={50} layout='responsive' />
			<div className={styles['product-info']}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<button onClick={() => handleClick(product)} className={styles['more-clickable-area']} >
					<Image src={addCartImage} alt="addToCartImage" width={30} height={30} layout='fixed'/>
				</button>
			</div>
		</div>
	);
};

export default ProductItem;