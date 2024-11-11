import { ProductList } from '../'
import { CategoryMenu } from '../../categories'
import { HeaderPage } from '../../ui'

const MenuPage = () => {

    return (
        <>
            <HeaderPage
                title='Menu del restaurante'
                description='Agrega o crea nuevas ordenes para tus clientes'
            />

            <CategoryMenu/>
                
            <ProductList/>


        </>
    )
}

export default MenuPage