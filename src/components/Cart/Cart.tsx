import type { Product } from '../Products/ProductsList/Product/Product';

import './Cart.css';
import CartProduct from './CartProduct/CartProduct';

export type CartElm = {
	product: Product;
	quantity: number;
};

type CartProps = {
	cart: CartElm[];
	onRemoveProduct: (product: Product) => void;
	onCheckout: () => void;
};

const Cart = ({ cart, onRemoveProduct, onCheckout }: CartProps) => {
	return (
		<section className="cart">
			<h2>Your cart ({cart.reduce((acc, curr) => acc + curr.quantity, 0)})</h2>
			{!cart.length ? (
				<article className="empty">
					<img src="/illustration-empty-cart.svg" alt="Empty cart" />
					<p>Your added items will appear here</p>
				</article>
			) : (
				<article className="full">
					<ul className="cart-products">
						{cart.map(({ product, quantity }) => (
							<CartProduct
								key={product.name}
								product={product}
								quantity={quantity}
								onRemoveProduct={onRemoveProduct}
							/>
						))}
					</ul>
					<div className="total">
						<p className="title">Order total</p>
						<p className="price">
							$
							{cart
								.reduce(
									(acc, curr) => acc + curr.product.price * curr.quantity,
									0
								)
								.toFixed(2)}
						</p>
					</div>
					<div className="delivery">
						<img src="/icon-carbon-neutral.svg" alt="Carbon neutral" />
						<p>
							This is a <strong>carbon-neutral</strong> delivery
						</p>
					</div>
					<div className="checkout" onClick={onCheckout}>
						<p>Confirm Order</p>
					</div>
				</article>
			)}
		</section>
	);
};

export default Cart;
