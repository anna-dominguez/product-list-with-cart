import { useState } from 'react';

import Cart from './components/Cart/Cart';
import Products from './components/Products/Products';
import ProductsList from './components/Products/ProductsList/ProductsList';
import ModalCheckout from './components/ModalCheckout/ModalCheckout';

import type { Product } from './components/Products/ProductsList/Product/Product';
import type { CartElm } from './components/Cart/Cart';

import './App.css';

const App = () => {
	const [cart, setCart] = useState<CartElm[]>([]);
	const [isOpenModal, setIsOpenModal] = useState(false);

	const handleAddToCart = (product: Product) => {
		setCart((cart) => [...cart, { product, quantity: 1 }]);
	};

	const handleIncrement = (product: Product) => {
		const productIndex = cart.findIndex(
			(item: { product: Product; quantity: number }) =>
				item.product.name === product.name
		);
		cart[productIndex].quantity += 1;
		setCart([...cart]);
	};

	const handleDecrement = (product: Product) => {
		const productIndex = cart.findIndex(
			(item: { product: Product; quantity: number }) =>
				item.product.name === product.name
		);
		if (cart[productIndex].quantity === 1) {
			setCart(cart.filter((item) => item.product.name !== product.name));
		} else {
			cart[productIndex].quantity -= 1;
			setCart([...cart]);
		}
	};

	const handleRemoveProduct = (product: Product) => {
		setCart((cart) =>
			cart.filter((item) => item.product.name !== product.name)
		);
	};

	const handleCheckout = () => {
		setIsOpenModal(true);
	};

	const handleCloseModal = () => {
		setIsOpenModal(false);
		setCart([]);
	};

	return (
		<div className="app">
			{isOpenModal && (
				<ModalCheckout cart={cart} onCloseModal={handleCloseModal} />
			)}
			<Products>
				<ProductsList
					cart={cart}
					onAddToCart={handleAddToCart}
					onIncrement={handleIncrement}
					onDecrement={handleDecrement}
				/>
			</Products>
			<Cart
				cart={cart}
				onRemoveProduct={handleRemoveProduct}
				onCheckout={handleCheckout}
			/>
		</div>
	);
};

export default App;
