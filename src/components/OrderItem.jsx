import React, { useContext } from 'react';
import Image from 'next/image';
import close from '@icons/icon_close.png';
import AppContext from '@context/AppContext'
import styles from '../styles/OrderItem.module.scss';


const OrderItem = ( props ) => {

	const {product, indexValue } = props

	const { removeFromCart } = useContext(AppContext);

	const handleRemove = (index) => {
		removeFromCart(index)
	}
	return (
		<div className={styles.OrderItem}>
			<figure>
				<Image src={product?.images[0]} alt={product?.title} width={240} height={240}/>
			</figure>
			<p>{product?.title}</p>
			<p>{product?.price}</p>
			<Image src={close} alt="close"  onClick={() => handleRemove(indexValue)} className={styles.pointer} width={15} height={15}/>
		</div>
	);
}

export default OrderItem;
