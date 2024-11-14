import { HeaderPage } from '../../ui'
import { OrderFilters, OrderList } from '../'

const OrdersPage = () => {
    return (
        <>
        
            <HeaderPage
                description='Gestiona las comandas'
                title='Ordenes'
            />
            <OrderFilters/>
            <OrderList/>
        </>
    )
}



export default OrdersPage