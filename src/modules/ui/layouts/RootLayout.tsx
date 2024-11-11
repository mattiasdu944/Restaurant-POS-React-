import { Outlet } from 'react-router-dom'
import { SideMenu } from '../../ui'

export const RootLayout = () => {
    return (
        <div className='flex h-screen'>
            <SideMenu/>
            <main className='w-full h-screen overflow-y-scroll'>
                <Outlet/>
            </main>
        </div>
    )
}
