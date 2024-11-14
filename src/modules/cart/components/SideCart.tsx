import { Button } from '@nextui-org/react'

export const SideCart = () => {
    return (
        <div className='side__cart'>
            <h2 className='text-2xl'>Carrito de compras</h2>

            <div className="flex-1"></div>

            <div className='space-y-4'>
                <p className='flex justify-between'>
                    <span>Items(7)</span>
                    <span className='font-semibold'>$28,00</span>
                </p>

                <p className='text-xl flex justify-between'>
                    <span>Total</span>
                    <span className='font-semibold'>$28,00</span>
                </p>

                <Button color='primary' fullWidth>Generar Orden</Button>
            </div>
        </div>
    )
}
