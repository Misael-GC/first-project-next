import React, { useContext } from 'react';
import '../styles/ProductItem.scss';
import addCartImage from '@icons/bt_add_to_cart.svg';
import AppContext from '@context/AppContext';




const ProductItem = ({product}) => {
	const { addToCart } = useContext(AppContext); //conexios -> checa App.jsx

	const handleClick = (item) => {
		addToCart(item);//agregar un producto al carrito
	}
	
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={addCartImage} alt="addToCartImage" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;