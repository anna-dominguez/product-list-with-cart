import type { Product } from '../../Products/ProductsList/Product/Product';
import './CartProduct.css';

type CartProductProps = {
	product: Product;
	quantity: number;
	onRemoveProduct: (product: Product) => void;
};

const CartProduct = ({
	product,
	quantity,
	onRemoveProduct,
}: CartProductProps) => {
	const totalPrice = product.price * quantity;

	const handleRemoveProduct = () => {
		onRemoveProduct(product);
	};

	return (
		<li className="cart-product">
			<div className="resume">
				<p className="name">{product.name}</p>
				<div className="prices">
					<p className="quantity">x{quantity}</p>
					<p className="price">@${product.price}</p>
					<p className="total-price">${totalPrice}</p>
				</div>
			</div>
			<div className="button-remove" onClick={handleRemoveProduct}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="10"
					height="10"
					fill="none"
					viewBox="0 0 10 10"
				>
					<path
						className="icon"
						fill="#CAAFA7"
						d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
					/>
				</svg>
			</div>
		</li>
	);
};

export default CartProduct;
