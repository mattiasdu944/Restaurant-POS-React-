import { OrderCard } from './OrderCard';


export const OrderList = () => {
    return (
        <section>
            <div className="container">
                <ul className='space-y-4'>

                    {
                        [1, 2, 3, 4, 5, 6, 7, 8].map(order => (
                            <li key={order}>
                                <OrderCard  />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}
