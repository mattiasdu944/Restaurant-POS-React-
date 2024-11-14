import { Outlet } from 'react-router-dom'
import { SideMenu } from '../../ui'
import { SideCart } from '../../cart'

export const RootLayout = () => {
    return (
        <div className='flex h-screen'>
            <SideMenu />
            <div className='flex w-full h-screen overflow-y-scroll'>

                <main className='w-full'>
                    <Outlet />
                </main>
                <SideCart />
            </div>
        </div>
    )
}
