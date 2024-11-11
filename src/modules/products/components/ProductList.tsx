import { products } from "../../../data"
import { ProductCard } from "./ProductCard"

export const ProductList = () => {
    return (
        <section>
        <div className="container">
            <ul className='grid grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                    products.map(product => (
                        <ProductCard key={product.slug} product={ product }/>
                    ))
                }
            </ul>
        </div>
    </section>
    )
}
