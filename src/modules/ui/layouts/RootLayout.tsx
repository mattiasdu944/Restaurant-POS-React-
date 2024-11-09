
import { Outlet } from 'react-router-dom'
import { SideMenu } from '../../ui'

export const RootLayout = () => {
    return (
        <div>
            <SideMenu/>
            <Outlet/>
        </div>
    )
}
