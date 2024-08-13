import { useEffect, useState } from 'react';
import type { CartElm } from '../../../Cart/Cart';

import './Product.css';

export type Product = {
	name: string;
	price: number;
	image: {
		thumbnail: string;
		mobile: string;
		tablet: string;
		desktop: string;
	};
	category: string;
};

type ProductProps = {
	product: Product;
	cart: CartElm[];
	onAddToCart: (product: Product) => void;
	onIncrement: (product: Product) => void;
	onDecrement: (product: Product) => void;
};

const Product = ({
	product,
	cart,
	onAddToCart,
	onIncrement,
	onDecrement,
}: ProductProps) => {
	const [isAdded, setIsAdded] = useState(false);
	const [quantity, setQuantity] = useState(0);

	useEffect(() => {
		const productInCart = cart.find(
			(item: { product: Product; quantity: number }) =>
				item.product.name === product.name
		);
		if (productInCart) {
			setIsAdded(true);
			setQuantity(productInCart.quantity);
		} else {
			setIsAdded(false);
			setQuantity(0);
		}
	}, [cart, product.name]);

	const handleAddToCart = () => {
		setIsAdded(true);
		setQuantity(1);
		onAddToCart(product);
	};

	const handleIncrement = () => {
		setQuantity(quantity + 1);
		onIncrement(product);
	};

	const handleDecrement = () => {
		if (quantity === 1) {
			setQuantity(quantity - 1);
			setIsAdded(false);
		} else {
			setQuantity(quantity - 1);
		}
		onDecrement(product);
	};

	return (
		<li className="product">
			<div className="image-content">
				<picture>
					<source
						className="image"
						media="(min-width: 1024px)"
						srcSet={product.image.desktop}
					/>
					<source
						className="image"
						media="(min-width: 768px)"
						srcSet={product.image.tablet}
					/>
					<source
						className="image"
						media="(min-width: 320px)"
						srcSet={product.image.mobile}
					/>
					<img
						className="image"
						src={product.image.thumbnail}
						alt={product.name}
					/>
				</picture>
				{!isAdded || !quantity ? (
					<div className="button button__add" onClick={handleAddToCart}>
						<img src="/icon-add-to-cart.svg" alt="Add to cart" />
						<span>Add to cart</span>
					</div>
				) : (
					<div className="button button__quantity">
						<div className="button-icon" onClick={handleDecrement}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="10"
								height="2"
								fill="none"
								viewBox="0 0 10 2"
							>
								<path
									className="icon"
									fill="#fff"
									d="M0 .375h10v1.25H0V.375Z"
								/>
							</svg>
						</div>
						<span>{quantity}</span>
						<div className="button-icon" onClick={handleIncrement}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="10"
								height="10"
								fill="none"
								viewBox="0 0 10 10"
							>
								<path
									className="icon"
									fill="#fff"
									d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
								/>
							</svg>
						</div>
					</div>
				)}
			</div>
			<p className="category">{product.category}</p>
			<p className="name">{product.name}</p>
			<p className="price">${product.price}</p>
		</li>
	);
};

export default Product;
