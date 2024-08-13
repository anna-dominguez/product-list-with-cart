import type { CartElm } from '../Cart/Cart';

import './ModalCheckout.css';

type ModalCheckoutProps = {
	cart: CartElm[];
	onCloseModal: () => void;
};

const ModalCheckout = ({ cart, onCloseModal }: ModalCheckoutProps) => {
	return (
		<div className="modal">
			<section className="order">
				<header className="header">
					<img src="/icon-order-confirmed.svg" alt="Order confirmed" />
					<div className="text">
						<h2>Order Confirmed</h2>
						<p>We hope you enjoy your food!</p>
					</div>
				</header>
				<article>
					<ul className="order-details">
						{cart.map(({ product, quantity }) => (
							<li key={product.name} className="product-details">
								<div className="product">
									<img src={product.image.thumbnail} alt={product.name} />
									<div className="resume">
										<p className="name">{product.name}</p>
										<div className="quantity-price">
											<p className="quantity">x{quantity}</p>
											<p className="price">@ ${product.price}</p>
										</div>
									</div>
								</div>
								<div className="total-price">${product.price * quantity}</div>
							</li>
						))}
					</ul>
					<div className="order-price">
						<p className="title">Order total</p>
						<p className="price">
							$
							{cart.reduce(
								(acc, curr) => acc + curr.product.price * curr.quantity,
								0
							)}
						</p>
					</div>
				</article>
				<div onClick={onCloseModal} className="close">
					Start New Order
				</div>
			</section>
		</div>
	);
};

export default ModalCheckout;
