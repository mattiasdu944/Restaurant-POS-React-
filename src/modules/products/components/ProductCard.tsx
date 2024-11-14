
import { Card, CardBody, Image } from '@nextui-org/react'
import { Product } from '../interfaces/product'

interface Props {
    product: Product;
}

export const ProductCard = ({ product }: Props) => {
    return (
        <Card className="border-none rounded-[3rem] pb-4"  isPressable shadow='sm'>
            <CardBody >
                <Image
                    className='mx-auto'
                    src='https://png.pngtree.com/png-clipart/20231019/original/pngtree-pizza-png-with-ai-generated-png-image_13357740.png'
                />
                <h3 className='text-center text-2xl'>{product.name}</h3>
                <p className='text-center text-primary-500 font-bold text-2xl'>${product.price}</p>
                <p className='text-center text-xl'>
                    <span className='text-gray-600 font-semibold'>{product.stock}u.</span> Disponibles
                </p>
            </CardBody>
        </Card>
    )
}
