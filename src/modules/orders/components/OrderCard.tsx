import { Chip } from '@nextui-org/react'

export const OrderCard = () => {
    return (
        <div className='order__card'>
            <div>
                <h4 className='text-2xl'>Order: #907553</h4>
                <p className='text-lg'>Cantidad: 4</p>
            </div>
            <div className='space-y-2'>
                <p className='text-2xl text-end'>
                    20:30pm
                </p>
                <div className='flex items-center gap-4'>
                    <p className='text-2xl font-bold'>$45,49</p>
                    <Chip color='success' size='lg' className='text-white'>Delivery</Chip>
                </div>
            </div>
        </div>
    )
}
