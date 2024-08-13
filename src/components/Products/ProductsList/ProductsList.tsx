import Product from './Product/Product';
import products from '../../../../data/data.json';
import type { CartElm } from '../../Cart/Cart';
import type { Product as ProductElm } from './Product/Product';

import './ProductsList.css';

type ProductListProps = {
	cart: CartElm[];
	onAddToCart: (product: ProductElm) => void;
	onIncrement: (product: ProductElm) => void;
	onDecrement: (product: ProductElm) => void;
};

const ProductsList = ({
	cart,
	onAddToCart,
	onIncrement,
	onDecrement,
}: ProductListProps) => {
	return (
		<ul className="products-list">
			{products.map((product) => (
				<Product
					key={product.name}
					product={product}
					cart={cart}
					onAddToCart={onAddToCart}
					onIncrement={onIncrement}
					onDecrement={onDecrement}
				/>
			))}
		</ul>
	);
};

export default ProductsList;
