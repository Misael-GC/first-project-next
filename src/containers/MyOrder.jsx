import React, { useContext } from 'react';
import Link from 'next/link'; //paso 1
import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';
import arrow from '@icons/flechita.svg';
import styles from '@styles/MyOrders.module.scss';
import Image from 'next/image';


const MyOrder = ({ toggleOrders, setToggleOrders }) => {
	const { state } = useContext(AppContext);

	const sumTotal = () =>{
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	};

	return (
		<aside className={styles.MyOrder}>
			<div className={styles["title-container"]}>
				<Image
					src={arrow} 
					alt="arrow" 
					className={styles.pointer}
					onClick={() => setToggleOrders(toggleOrders)}
					width={15}
					height={15}
					layout='fixed'
					/>
				<p className={styles.title }>My order</p>
			</div>
			<div className={styles["my-order-content"]}>
				{state.cart.length > 0 ?(
					state.cart.map((product, index) => (
					<OrderItem 
					indexValue={index}
					product={product} 
					key={index}/>
				))
				): (<div className={styles["cart-empty"]}> No tienes productos Agregados ¯\_(ツ)_/¯ </div>)}
				
				<div className={styles.order}>
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<Link className={styles["primary-button"]} href='/checkout'> 
					Checkout
				</Link>
			</div>
		</aside>
	);
};

export default MyOrder;