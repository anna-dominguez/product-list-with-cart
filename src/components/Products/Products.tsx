import './Products.css';

type ProductsProps = {
	children: React.ReactNode;
};

const Products = ({ children }: ProductsProps) => {
	return (
		<section className="products">
			<h1>Desserts</h1>
			{children}
		</section>
	);
};

export default Products;
